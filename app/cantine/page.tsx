import type { Meal } from "../../types/meal";

import MealPlanCard from "../../components/meal-plan/meal-plan-card";

export default async function page() {
  const meals = await getMealsForDate("2026-09-21");
  return (
    <div>
      {meals.map((meal) => (
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
