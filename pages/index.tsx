import Layout from "../components/Layout";
import MealCard from "../components/MealCard";

export default function Home() {
  const meals = [
    { name: "Spaghetti Bolognese", description: "Classic Italian pasta" },
    { name: "Chicken Curry", description: "Spicy Indian curry" },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal, index) => (
          <MealCard key={index} name={meal.name} description={meal.description} />
        ))}
      </div>
    </Layout>
  );
}