interface MealCardProps {
  name: string;
  description: string;
}

export default function MealCard({ name, description }: MealCardProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}