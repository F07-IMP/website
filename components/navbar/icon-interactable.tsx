"use client";

import Image from "next/image";
import Link from "next/link";
import { BurgerMenuIcon } from "../../lib/svgs";
import { useWindowSize } from "../../lib/hooks/use-window-size";
import { useState } from "react";

type IconInteractableProps = { href: string };

export default function IconInteractable({ href }: IconInteractableProps) {
	const { width } = useWindowSize();

	return (
		<div>
			{width && width >= 768 ?
				<Link
					href={href}
					className="flex w-fit items-center gap-1 group/icon"
				>
					<Image
						src="/icons/FSMT_Logo.svg"
						loading="eager"
						alt="Logo der Fachschaft Medientechnologie"
						width={32}
						height={32}
						className="group-hover/icon:animate-spin"
					/>
					<div className="hidden lg:flex flex-col gap-0.5">
						<p className="text-[20px] font-bold leading-tight">Fachschaft</p>
						<p className="text-[12px] font-medium leading-tight">Medientechnologie</p>
					</div>
				</Link>
			:	<MobileMenu />}
		</div>
	);
}

function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<button
			className="flex px-2 h-10 items-center gap-1 group/icon text-accent"
			onClick={() => setOpen(!open)}
		>
			<Image
				src="/icons/FSMT_Logo.svg"
				loading="eager"
				alt="Logo der Fachschaft Medientechnologie"
				width={32}
				height={32}
				className="group-hover/icon:animate-spin"
			/>
			<BurgerMenuIcon strokeWidth={2.5} />
			{open && (
				<div className="absolute top-[6vh] left-0 w-full h-[94vh] bg-gray-950/50 z-50">
					<div className="flex flex-col gap-2 p-4 bg-background">
						<Link
							href="/"
							className="font-bold text-lg flex w-full items-center justify-center text-text"
							onClick={() => setOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/news"
							className="font-bold text-lg flex w-full items-center justify-center text-text"
							onClick={() => setOpen(false)}
						>
							Aktuelles
						</Link>
						<Link
							href="/nextcloud"
							className="font-bold text-lg flex w-full items-center justify-center text-text"
							onClick={() => setOpen(false)}
						>
							Nextcloud
						</Link>
						<Link
							href="/first-semester"
							className="font-bold text-lg flex w-full items-center justify-center text-text"
							onClick={() => setOpen(false)}
						>
							Erstsemester
						</Link>
						<Link
							href="/q-a"
							className="font-bold text-lg flex w-full items-center justify-center text-text"
							onClick={() => setOpen(false)}
						>
							Q&A
						</Link>
					</div>
				</div>
			)}
		</button>
	);
}
