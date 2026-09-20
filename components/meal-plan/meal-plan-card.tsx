import type { Meal } from "../../types/meal";
import MealTypeIcon from "./meal-type-icon";

type MealPlanCardProps = {
	meal: Meal;
};

export default function MealPlanCard({ meal }: MealPlanCardProps) {
	let type = "Fleisch";
	let isVeggy = meal.category === "Vegan/vegetarisch";

	if (isVeggy) {
		type = "Unbekannt";
	}
	if (Object.values(meal.notes).includes("Vegan")) {
		isVeggy = true;
		type = "Vegan";
	}
	if (Object.values(meal.notes).includes("Vegetarisch")) {
		isVeggy = true;
		type = "Vegetarisch";
	}

	return (
		<div className="w-full justify-self-center rounded bg-background-accent p-2">
			<span className="text-[14px] font-semibold">{meal.name}</span>
			<p />
			<span className="text-[12px] font-medium">{meal.category}</span>
			<div className="grid grid-cols-2">
				<MealTypeIcon
					isVeggy={isVeggy}
					type={type}
				/>
				<span>Preis: {meal.prices.students != null ? `${meal.prices.students.toFixed(2).replace(".", ",")} €` : "nicht verfügbar"}</span>
			</div>
		</div>
	);
}
