"use client";

import Image from "next/image";
import { RightArrowIcon } from "../../lib/svgs";

export default function Hero() {
	return (
		<div className="relative">
			<Image
				width={1440}
				height={504}
				src="/hero-bg-image.png"
				alt=""
				className="block h-auto w-full"
			/>
			<div className="absolute inset-0 grid grid-cols-1 items-center gap-8 px-8 md:grid-cols-2 md:px-32 py-[5%] 2xl:py-[10%]">
				<div className="h-full flex flex-col justify-between">
					<div>
						<h1 className="text-[64px] font-bold">Fachschaft</h1>
						<h2 className="text-[32px] font-medium leading-tight">Medientechnologie</h2>
					</div>
					<p className="max-w-sm text-[20px] tracking-wide font-light leading-tight">
						Willkommen an der Fachschaft Medientechnologie, der TH Köln. Hier gibt es Informationen und Nützliches rund ums Studium der
						Medientechnologie!
					</p>
				</div>
				<nav className="justify-self-end h-full">
					<ul className="space-y-4 text-right font-bold text-[20px] h-full flex flex-col justify-between">
						<li>
							<a
								href="/news"
								className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
							>
								Aktuelles{" "}
								<span aria-hidden="true">
									<RightArrowIcon className="ml-1" />
								</span>
							</a>
						</li>
						<li>
							<a
								href="/first-semester"
								className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
							>
								Erstsemester{" "}
								<span aria-hidden="true">
									<RightArrowIcon className="ml-1" />
								</span>
							</a>
						</li>
						<li>
							<a
								href="/nextcloud"
								className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
							>
								NextCloud{" "}
								<span aria-hidden="true">
									<RightArrowIcon className="ml-1" />
								</span>
							</a>
						</li>
						<li>
							<a
								href="/q-a"
								className="flex justify-end items-center hover:underline hover:scale-105 transition-transform"
							>
								Q&A{" "}
								<span aria-hidden="true">
									<RightArrowIcon className="ml-1" />
								</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
