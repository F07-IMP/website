export const runtime = "nodejs";

const DOOR_API_URL = "ws://192.168.1.241:8000/ws";
const encoder = new TextEncoder();

function normalizeState(message: string) {
	const data = JSON.parse(message);

	return data?.state ? data.state.toLowerCase() : undefined;
}

export async function GET(request: Request) {
	const stream = new ReadableStream({
		start(controller) {
			let streamClosed = false;

			const send = (data: unknown) => {
				if (streamClosed || controller.desiredSize === null) return;
				controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
			};

			const closeStream = () => {
				if (streamClosed || controller.desiredSize === null) return;
				streamClosed = true;
				controller.close();
			};

			const socket = new WebSocket(DOOR_API_URL);

			socket.addEventListener("open", () => {});

			socket.addEventListener("message", (event) => {
				try {
					const state = normalizeState(event.data);
					send({ state });
				} catch {
					send({ error: "Failed to parse message" });
				}
			});

			socket.addEventListener("error", () => {
				send({ error: "Door API is unavailable" });
			});

			socket.addEventListener("close", () => {
				closeStream();
			});

			request.signal.addEventListener("abort", () => {
				socket.close();
				closeStream();
			});
		},
	});

	return new Response(stream, {
		headers: {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			Connection: "keep-alive",
		},
	});
}
