"use client";

import Image from "next/image";
import Link from "next/link";

type IconInteractableProps = { href: string };

export default function IconInteractable({ href }: IconInteractableProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-1 group/icon"
		>
			<Image
				className="group-hover/icon:animate-spin"
				src="/icons/FSMT_Logo.svg"
				alt=""
				width={48}
				height={48}
			/>
			<div>
				<p className="text-[22px] font-bold leading-tight">Fachschaft</p>
				<p className="text-[14px] font-medium leading-tight">Medientechnologie</p>
			</div>
		</Link>
	);
}
