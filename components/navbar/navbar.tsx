"use client";

import NavItem from "./nav-item";
import IconInteractable from "./icon-interactable";
import DoorStateDisplay from "./door-state-display";

export default function NavBar() {
	return (
		<div className="flex w-full py-1 px-2 md:px-8 justify-between items-center rounded bg-transparent md:bg-background-accent ">
			<IconInteractable href="/" />

			<div className="gap-6 hidden md:flex">
				<NavItem
					content="Aktuelles"
					href="/news"
				/>
				<NavItem
					content="Nextcloud"
					href="/nextcloud"
				/>
				<NavItem
					content="Erstsemester"
					href="/first-semester"
				/>
				<NavItem
					content="Q&A"
					href="/q-a"
				/>
			</div>

			<div className="justify-self-end">
				<DoorStateDisplay />
			</div>
		</div>
	);
}
