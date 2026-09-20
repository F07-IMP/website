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
  console.log(isActive);
  return (
    <div
      className={`px-2 ${isActive ? "border-b-2 border-accent" : ""} font-bold`}
      onClick={onClick}
    >
      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
}
