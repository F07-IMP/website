import DBIntegration from "../../components/db-integration";
import MealPlan from "../../components/meal-plan/meal-plan";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:px-100">
      <DBIntegration />
      <MealPlan />
    </div>
  );
}
