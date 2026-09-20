"use client";
import DBIntegration from "../../components/db-integration";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 w-full md:px-100">
			<DBIntegration />
		</div>
	);
}
