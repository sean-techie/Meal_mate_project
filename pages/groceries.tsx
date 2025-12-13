import Layout from "../components/Layout";
import MealCard from "../components/MealCard";

export default function Groceries() {
  const groceries = [
    { name: "Tomatoes", description: "Fresh and ripe" },
    { name: "Chicken Breast", description: "Boneless and skinless" },
    { name: "Pasta", description: "Spaghetti or penne" },
    { name: "Curry Powder", description: "Spicy and aromatic" },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Groceries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceries.map((item, index) => (
          <MealCard key={index} name={item.name} description={item.description} />
        ))}
      </div>
    </Layout>
  );
}