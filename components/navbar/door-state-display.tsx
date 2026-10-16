"use client";

import { useEffect, useState } from "react";
import { LockOpenIcon, LockCloseIcon, ServerOfflineIcon, LoadingIcon } from "../../lib/svgs";

type DoorState = "open" | "closed" | undefined;

export default function DoorStateDisplay() {
	const [state, setState] = useState<DoorState>();
	const [loading, setLoading] = useState(false);
	const [timedOut, setTimedOut] = useState(false);
	const [connectionKey, setConnectionKey] = useState(0);

	useEffect(() => {
		const events = new EventSource("/api/door-state");

		events.onopen = () => {
			setLoading(false);
			setTimedOut(false);
		};

		events.onmessage = (event) => {
			const data = JSON.parse(event.data);
			if (data.error) {
				setTimedOut(true);
				setState(undefined);
			} else {
				setState(data.state);
			}
		};

		events.onerror = () => {
			setTimedOut(true);
			setState(undefined);
			events.close();
		};

		return () => {
			events.close();
		};
	}, [connectionKey]);

	const Icon =
		loading ? LoadingIcon
		: state === "open" ? LockOpenIcon
		: state === "closed" ? LockCloseIcon
		: ServerOfflineIcon;

	const stateClass =
		state ?
			state === "open" ?
				" text-success border-success"
			:	" text-error border-error"
		:	" text-warning border-warning";

	const stateStyle =
		state ?
			state === "open" ?
				{
					boxShadow: "0 0 5px var(--color-success) inset",
					textShadow: "0 0 20px var(--color-success)",
				}
			:	{
					boxShadow: "0 0 5px var(--color-error) inset",
					textShadow: "0 0 20px var(--color-error)",
				}
		:	{
				boxShadow: "0 0 5px var(--color-warning) inset",
				textShadow: "0 0 20px var(--color-warning)",
			};

	return (
		<button
			onClick={() => {}}
			className={"bg-transparent w-30 h-10 border-2 border-solid rounded-md font-bold flex justify-center items-center uppercase" + stateClass}
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
				size={16}
			/>
			{state || ""}
		</button>
	);
}
