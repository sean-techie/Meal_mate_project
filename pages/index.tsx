import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MealCard from "../components/MealCard";

type Meal = {
  id: number;
  name: string;
  description: string;
};

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal.id} name={meal.name} description={meal.description} />
        ))}
      </div>
    </Layout>
  );
}