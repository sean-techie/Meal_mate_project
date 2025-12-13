import type { NextApiRequest, NextApiResponse } from "next";

type Grocery = {
  id: number;
  name: string;
  description: string;
};

const groceries: Grocery[] = [
  { id: 1, name: "Tomatoes", description: "Fresh and ripe" },
  { id: 2, name: "Chicken Breast", description: "Boneless and skinless" },
  { id: 3, name: "Pasta", description: "Spaghetti or penne" },
  { id: 4, name: "Curry Powder", description: "Spicy and aromatic" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(groceries);
}