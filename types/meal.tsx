export type Meal = {
  name: string;
  prices: {
    students: number | null;
    employees: number | null;
    pupils: number | null;
    others: number | null;
  };
  category: string;
  notes: Record<string, string>;
};
