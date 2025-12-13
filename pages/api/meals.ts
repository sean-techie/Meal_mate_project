import type { NextApiRequest, NextApiResponse } from "next";

type Meal = {
  id: number;
  name: string;
  description: string;
};

const meals: Meal[] = [
  { id: 1, name: "Spaghetti Bolognese", description: "Classic Italian pasta" },
  { id: 2, name: "Chicken Curry", description: "Spicy Indian curry" },
  { id: 3, name: "Beef Stir Fry", description: "Quick stir-fried beef with veggies" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(meals);
}