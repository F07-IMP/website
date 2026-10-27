"use client";

import { useState } from "react";
import hierarchy from "../../lib/docs/navigation.json";
import { ChevronDown, ChevronUp } from "@/lib/svgs";

type NavigationNode = {
	type: string;
	level: number;
	name: string;
	path: string;
	items?: NavigationNode[];
};

function NavigationEntry({ node }: { node: NavigationNode }) {
	return (
		<div className="flex items-center px-2 py-1 gap-2 select-none rounded hover:bg-accent/25">
			{node.name}
			<div className="w-1 h-1 bg-accent rounded-full" />
		</div>
	);
}

function NavigationDirectory({ node }: { node: NavigationNode }) {
	const [open, setOpen] = useState(false);
	const Icon = open ? ChevronUp : ChevronDown;

	return (
		<div>
			<div
				className="flex items-center w-full gap-1 px-2 py-1 select-none rounded hover:bg-accent/25 group/reveal"
				onClick={() => setOpen(!open)}
			>
				<Icon
					size={20}
					strokeWidth={1.5}
					className="opacity-0 transition-opacity group-hover/reveal:opacity-100"
				/>
				{node.name}
			</div>
			{open && (
				<div className="pl-8">
					<NavigationNodes nodes={node.items ?? []} />
				</div>
			)}
		</div>
	);
}

function NavigationNodes({ nodes }: { nodes: NavigationNode[] }) {
	return (
		<>
			{nodes.map((node) => (
				<div key={node.path}>
					{node.items ?
						<NavigationDirectory node={node} />
					:	<NavigationEntry node={node} />}
				</div>
			))}
		</>
	);
}

export default function Navigation() {
	return (
		<div className="flex flex-col w-fit h-fit p-4 rounded-lg bg-background-accent">
			<NavigationNodes nodes={hierarchy} />
		</div>
	);
}
