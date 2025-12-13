import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MealCard from "../components/MealCard";

type Grocery = {
  id: number;
  name: string;
  description: string;
};

export default function Groceries() {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  useEffect(() => {
    fetch("/api/groceries")
      .then((res) => res.json())
      .then((data) => setGroceries(data));
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Groceries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceries.map((item) => (
          <MealCard key={item.id} name={item.name} description={item.description} />
        ))}
      </div>
    </Layout>
  );
}