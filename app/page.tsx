import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import InfoCard from "../components/info-card/info-card";

export default function Home() {
	return (
		<div>
			<Hero />
			<div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-3 md:px-32 md:pt-16 md:pb-10">
				<InfoCard
					title="Was ist IMP"
					content={ImpDescriptionText}
					imagepath="/info-card-placeholder.jpg"
					href="/about-us"
				/>
				<InfoCard
					title="Mensa Speiseplan"
					content={CantinePlanText}
					imagepath="/info-card-placeholder.jpg"
					href=""
				/>
				<InfoCard
					title="ÖPNV Fahrplan"
					content={TrainPlanText}
					imagepath="/info-card-placeholder.jpg"
					href=""
				/>
			</div>
		</div>
	);
}

const ImpDescriptionText =
	"IMP steht für Institut für Medien und Phototechnik. Das ist eine Art Überbleibsel aus vorigen Studiengängen, aus denen Medientechnologie entstanden ist. Aber keine Sorge, wir sind für euch und nur für euch da!";
const CantinePlanText = "Falls du wissen willst, welche Verbrechen die Mensa heute verbrochen hat, kannst du das auch hier nachschauen!";
const TrainPlanText = "Die KVB hat nichts gegen dich persönlich. Versprochen...";
