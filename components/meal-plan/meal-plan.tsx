import type { Meal } from "../../types/meal";

import MealPlanCard from "./meal-plan-card";

export default async function MealPlan() {
  const meals = await getMealsForDate("2026-09-21");
  console.log(meals);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Hauptgerichte:</h1>
      {meals
        .filter((meal) => meal.category !== "Beilagen")
        .filter((meal) => meal.name !== "Beilagensalat Standard")
        .map((meal) => (
          <MealPlanCard key={meal.name} meal={meal} />
        ))}
      <h1 className="text-xl">Beilagen:</h1>
      {meals
        .filter(
          (meal) =>
            meal.category === "Beilagen" ||
            meal.name === "Beilagensalat Standard",
        )
        .map((meal) => (
          <MealPlanCard key={meal.name} meal={meal} />
        ))}
    </div>
  );
}

async function getMealsForDate(date: string): Promise<Meal[]> {
  const response = await fetch(
    `https://openmensa.org/api/v2/canteens/387/days/${date}/meals`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Dieser Inhalt konnte nciht geladen werden.");
  }
  return response.json();
}
