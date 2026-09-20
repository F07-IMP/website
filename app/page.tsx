import NavBar from "./components/navbar";
import DoorStateDisplay from "./components/door-state-display";

export default function Home() {
	return (
		<div>
			<NavBar />
			<DoorStateDisplay stateData={"open"} />
		</div>
	);
}
