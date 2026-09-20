import type { Meal } from "../../types/meal";

type MealPlanCardProps = {
  meal: Meal;
};

export default function MealPlanCard({ meal }: MealPlanCardProps) {
  return <h1 className="text-xl">{meal.name}</h1>;
}
