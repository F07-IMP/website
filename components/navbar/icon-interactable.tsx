"use client";

import Image from "next/image";
import Link from "next/link";

type IconInteractableProps = { href: string };

export default function IconInteractable({ href }: IconInteractableProps) {
  return (
    <Link href={href} className="flex items-center gap-1">
      <Image src="/icons/logo.png" alt="" width={70} height={70} />
      <div>
        <p className="text-[22px] font-bold leading-tight">Fachschaft</p>
        <p className="text-[14px] font-medium leading-tight">
          Medientechnologie
        </p>
      </div>
    </Link>
  );
}
