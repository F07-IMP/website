"use client";

import NavItem from "./nav-item";
import IconInteractable from "./icon-interactable";
import DoorStateDisplay from "./door-state-display";

export default function NavBar() {
	return (
		<div className="grid grid-cols-[1fr_auto_1fr] items-center rounded bg-background-accent px-4">
			<div className="justify-self-start">
				<IconInteractable href="/" />
			</div>

			<div className="flex gap-6">
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
