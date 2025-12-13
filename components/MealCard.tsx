interface MealCardProps {
  name: string;
  description: string;
}

export default function MealCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}