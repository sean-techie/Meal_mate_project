import type { NextApiRequest, NextApiResponse } from "next";

// Start with the same array from meals.ts
let meals = [
  { id: 1, name: "Spaghetti Bolognese", description: "Classic Italian pasta" },
  { id: 2, name: "Chicken Curry", description: "Spicy Indian curry" },
  { id: 3, name: "Beef Stir Fry", description: "Quick stir-fried beef with veggies" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: "Name and description are required" });
    }

    const newMeal = { id: meals.length + 1, name, description };
    meals.push(newMeal);

    return res.status(201).json(newMeal);
  }

  // Return all meals for GET requests
  res.status(200).json(meals);
}