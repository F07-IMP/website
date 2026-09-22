import DBIntegration from "../../components/db-integration";
import MealPlan from "../../components/meal-plan/meal-plan";

export default function Dashboard() {
	return (
		<div className="flex justify-center w-full px-[5%] md:px-[5%] lg:px-[15%] 2xl:px-[20%] py-8">
			<div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
				<DBIntegration />
				<MealPlan />
			</div>
		</div>
	);
}
