"use client";

import { LockOpenIcon, LockCloseIcon } from "../lib/svgs";

export default function DoorStateDisplay({ state }: { state?: "open" | "closed" }) {
	return (
		<button
			onClick={() => console.log("state requested")}
			className={
				"m-4 bg-transparent w-30 h-10 border-2 border-solid rounded-md font-bold flex justify-center items-center uppercase" +
				(state === "open" ? " text-success border-success" : "") +
				(state === "closed" ? " text-error border-error" : "")
			}
			style={
				state === "open" ?
					{ boxShadow: "0 0 5px var(--color-success) inset", textShadow: "0 0 20px var(--color-success)" }
				:	{ boxShadow: "0 0 5px var(--color-error) inset", textShadow: "0 0 20px var(--color-error)" }
			}
		>
			{state === "open" ?
				<LockOpenIcon
					className="mr-1"
					strokeWidth={2.75}
					size={20}
				/>
			:	<LockCloseIcon
					className="mr-1"
					strokeWidth={2.75}
					size={20}
				/>
			}{" "}
			{state}
		</button>
	);
}
