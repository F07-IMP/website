type MealTypeIconProps = {
  isVeggy: boolean;
  type?: string;
};

export default function MealTypeIcon({ isVeggy, type }: MealTypeIconProps) {
  return (
    <div
      className={`w-fit px-2 ${isVeggy ? "bg-success" : "bg-error"} rounded-full`}
    >
      {type}
    </div>
  );
}
