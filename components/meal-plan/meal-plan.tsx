import type { Meal } from "../../types/meal";

import MealPlanCard from "./meal-plan-card";

export default async function MealPlan() {
	const date = new Intl.DateTimeFormat("sv-SE", {
		timeZone: "Europe/Berlin",
	}).format(new Date());
	const meals = await getMealsForDate(date);
	if (meals.length == 0) {
		return <div className="text-[22px] font-bold text-text/40">Die Mensa ist heute geschlossen!</div>;
	}
	const mainDish = meals.filter((meal) => meal.prices.students != null && meal.prices.students > 0.65);
	const sideDish = meals.filter((meal) => meal.prices.students != null && meal.prices.students <= 0.65);
	//TODO: Salad in own category at the bottom
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-xl">Hauptgerichte:</h1>
			{mainDish
				.filter((meal) => meal.category !== "Beilagen")
				.filter((meal) => meal.name !== "Beilagensalat Standard")
				.filter((meal) => meal.name !== "Salatbuffet in Selbstbedienung, je 100g")
				.map((meal) => (
					<MealPlanCard
						key={meal.name}
						meal={meal}
					/>
				))}
			<h1 className="text-xl">Beilagen:</h1>
			{sideDish.map((meal) => (
				<MealPlanCard
					key={meal.name}
					meal={meal}
				/>
			))}
			{meals.find((meal) => meal.name === "Salatbuffet in Selbstbedienung, je 100g") && (
				<div>
					<h1 className="text-xl">Salatbuffet:</h1>
					<MealPlanCard
						key="Salatbuffet"
						meal={meals.find((meal) => meal.name === "Salatbuffet in Selbstbedienung, je 100g")!}
					/>
				</div>
			)}
		</div>
	);
}

async function getMealsForDate(date: string): Promise<Meal[]> {
	const response = await fetch(`https://openmensa.org/api/v2/canteens/387/days/${date}/meals`, {
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Dieser Inhalt konnte nicht geladen werden.");
	}
	return response.json();
}
