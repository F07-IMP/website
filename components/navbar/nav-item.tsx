"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
	content: string;
	href: string;
	onClick?: () => void;
};

export default function NavItem({ content, href, onClick }: NavItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={`px-2 ${isActive ? "border-accent text-accent" : "hover:text-accent border-transparent"} font-bold border-b-2`}
			onClick={onClick}
			href={href}
		>
			{content}
		</Link>
	);
}
