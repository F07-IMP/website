"use client";

import { useEffect, useState } from "react";
import { LockOpenIcon, LockCloseIcon, ServerOfflineIcon, LoadingIcon } from "../../lib/svgs";

type DoorState = "open" | "closed" | undefined;

export default function DoorStateDisplay() {
	const [state, setState] = useState<DoorState>();
	const [loading, setLoading] = useState(false);
	const [timedOut, setTimedOut] = useState(false);

	const fetchDoorState = async () => {
		setState(undefined);
		setLoading(true);
		setTimedOut(false);
		const controller = new AbortController();
		const timeoutId = window.setTimeout(() => controller.abort(), 3000);

		try {
			const response = await fetch("/api/door-state", { signal: controller.signal }); // TODO: change to actual API endpoint

			if (!response.ok) {
				setLoading(false);
				setTimedOut(true);
				throw new Error("Request failed!");
			}

			const data = await response.json();
			setState(data.state);
		} catch (error) {
			if (error instanceof Error && error.name === "AbortError") {
				setTimedOut(true);
			} else {
				console.error("Error fetching door state:", error);
			}
		} finally {
			window.clearTimeout(timeoutId);
			setLoading(false);
		}
	};

	useEffect(() => {
		const requestId = window.setTimeout(() => void fetchDoorState(), 0);

		return () => window.clearTimeout(requestId);
	}, []);

	const Icon =
		state ?
			state === "open" ?
				LockOpenIcon
			:	LockCloseIcon
		: timedOut ? ServerOfflineIcon
		: LoadingIcon;
	const stateClass =
		state ?
			state === "open" ?
				" text-success border-success"
			:	" text-error border-error"
		:	" text-warning border-warning";
	const stateStyle =
		state ?
			state === "open" ?
				{ boxShadow: "0 0 5px var(--color-success) inset", textShadow: "0 0 20px var(--color-success)" }
			:	{ boxShadow: "0 0 5px var(--color-error) inset", textShadow: "0 0 20px var(--color-error)" }
		:	{ boxShadow: "0 0 5px var(--color-warning) inset", textShadow: "0 0 20px var(--color-warning)" };

	return (
		<button
			onClick={() => void fetchDoorState()}
			className={"m-4 bg-transparent w-30 h-10 border-2 border-solid rounded-md font-bold flex justify-center items-center uppercase" + stateClass}
			style={stateStyle}
			aria-label={
				state ? `Door is ${state}`
				: timedOut ?
					"Door state unavailable"
				:	"Connecting to door"
			}
		>
			<Icon
				className={loading ? "animate-spin" : "mr-1"}
				strokeWidth={2.75}
				size={20}
			/>
			{state || ""}
		</button>
	);
}
