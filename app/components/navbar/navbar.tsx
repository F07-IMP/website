"use client";

import NavItem from "./nav-item";

export default function NavBar() {
  return (
    <div className="flex bg-background-accent rounded px-4 py-4">
      <NavItem content="FS IMP" href="/" />
      <NavItem content="Tür Bot" href="" onClick={() => console.log("Klick")} />
      <NavItem content="Aktuelles" href="/news" />
      <NavItem content="Nextcloud" href="" />
    </div>
  );
}
