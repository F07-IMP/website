"use client";

import { useEffect, useState } from "react";
import { LockOpenIcon, LockCloseIcon, ServerOfflineIcon, LoadingIcon } from "../lib/svgs";

export default function DoorStateDisplay({ stateData }: { stateData: "open" | "closed" | undefined }) {
	const [state, setState] = useState<{
		data: "open" | "closed" | undefined;
		isUnavailable: boolean;
	}>({ data: stateData, isUnavailable: false });

	useEffect(() => {
		if (state.data || state.isUnavailable) {
			return;
		}

		const timeout = window.setTimeout(() => setState({ data: undefined, isUnavailable: true }), 3000);

		return () => window.clearTimeout(timeout);
	}, [state.data, state.isUnavailable]);

	const isUnavailable = state.data === undefined && state.isUnavailable;
	const handleRequest = () => {
		setState({ data: undefined, isUnavailable: false });
		console.log("state requested");
	};

	const Icon =
		state.data ?
			state.data === "open" ?
				LockOpenIcon
			:	LockCloseIcon
		: isUnavailable ? ServerOfflineIcon
		: LoadingIcon;
	const stateClass =
		state.data ?
			state.data === "open" ?
				" text-success border-success"
			:	" text-error border-error"
		:	" text-warning border-warning";
	const stateStyle =
		state.data ?
			state.data === "open" ?
				{ boxShadow: "0 0 5px var(--color-success) inset", textShadow: "0 0 20px var(--color-success)" }
			:	{ boxShadow: "0 0 5px var(--color-error) inset", textShadow: "0 0 20px var(--color-error)" }
		:	{ boxShadow: "0 0 5px var(--color-warning) inset", textShadow: "0 0 20px var(--color-warning)" };

	return (
		<button
			onClick={handleRequest}
			className={"m-4 bg-transparent w-30 h-10 border-2 border-solid rounded-md font-bold flex justify-center items-center uppercase" + stateClass}
			style={stateStyle}
			aria-label={
				state.data ? `Door is ${state.data}`
				: isUnavailable ?
					"Door state unavailable"
				:	"Connecting to door"
			}
		>
			<Icon
				className={!state.data && !isUnavailable ? "animate-spin" : "mr-1"}
				strokeWidth={2.75}
				size={20}
			/>
			{state.data || ""}
		</button>
	);
}
