"use client";

import Image from "next/image";
import { RightArrowIcon } from "../../lib/svgs";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="p-2">
			<div className="relative flex justify-center overflow-hidden rounded-xl">
				<Image
					width={2837}
					height={1231}
					src="/campus_deutz.jpg"
					alt=""
					className="block h-auto w-full min-w-100 max-w-none object-cover object-center dark:opacity-35"
				/>
				<div className="absolute flex justify-between px-6 md:px-24 items-center inset-0 gap-10 bg-linear-to-r from-transparent to-background-accent dark:to-transparent">
					<div className="flex flex-col gap-6">
						<div className="hidden md:flex flex-col">
							<h1 className="text-[64px] font-bold">Fachschaft</h1>
							<h2 className="text-[32px] font-medium leading-tight">Medientechnologie</h2>
						</div>
						<p className="max-w-sm text-[20px] tracking-wide font-light leading-tight hidden lg:block">
							Willkommen an der Fachschaft Medientechnologie, der TH Köln. Hier gibt es Informationen und Nützliches rund ums Studium der
							Medientechnologie!
						</p>
					</div>
					<HeroNav />
				</div>
			</div>
		</div>
	);
}

function HeroNav() {
	return (
		<div className="font-bold text-[16px] md:text-[22px] flex flex-col gap-4 md:gap-6">
			<Link
				href="/news"
				className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
			>
				Aktuelles{" "}
				<span aria-hidden="true">
					<RightArrowIcon className="ml-1" />
				</span>
			</Link>
			<Link
				href="/first-semester"
				className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
			>
				Erstsemester{" "}
				<span aria-hidden="true">
					<RightArrowIcon className="ml-1" />
				</span>
			</Link>
			<Link
				href="/nextcloud"
				className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
			>
				NextCloud{" "}
				<span aria-hidden="true">
					<RightArrowIcon className="ml-1" />
				</span>
			</Link>
			<Link
				href="/q-a"
				className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
			>
				Q&A{" "}
				<span aria-hidden="true">
					<RightArrowIcon className="ml-1" />
				</span>
			</Link>
		</div>
	);
}
