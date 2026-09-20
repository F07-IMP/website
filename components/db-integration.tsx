"use client";

import Script from "next/script";

export default function DBIntegration() {
	return (
		<div>
			<h1 className="p-1 pt-2 font-bold">Bahnen und Busse</h1>
			<div className="gap-1 bg-background-accent p-2 rounded-md">
				<Script src="https://auskunft.kvb.koeln/staticfiles/hafas-widget-core.1.0.0.js?language=en_GB" />
				<div
					data-hfs-widget="true"
					data-hfs-widget-cfg-colorscheme="dark"
					data-hfs-widget-sq="true"
					data-hfs-widget-sq-displaymode="results"
					data-hfs-widget-sq-location="A=1@O=Köln Deutz Technische Hochschule@X=6985320@Y=50936701@U=1@L=900000044@p=1789652731@"
					data-hfs-widget-sq-locationname="Köln Deutz Technische Hochschule"
					// data-hfs-widget-sq-time="231000"
				></div>
			</div>
		</div>
	);
}
