const DOOR_API_URL = "http://192.168.1.241:8000/data";

export async function GET() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const response = await fetch(DOOR_API_URL, {
            signal: controller.signal,
            cache: "no-store",
        });

        if (!response.ok) {
            return Response.json(
                { error: "Door API request failed" },
                { status: response.status },
            );
        }

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
            return Response.json(
                { error: "Door API timed out" },
                { status: 502 },
            );
        }
        console.log(error);
        return Response.json(
            { error: "Door API is unavailable" },
            { status: 502 },
        );
    } finally {
        clearTimeout(timeoutId);
    }
}
