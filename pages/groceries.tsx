import { useState } from "react";
import Link from "next/link";

export default function Groceries() {
  const [item, setItem] = useState("");
  const [groceries, setGroceries] = useState<string[]>([]);

  const addItem = () => {
    if (!item.trim()) return;
    setGroceries([...groceries, item.trim()]);
    setItem("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link href="/" className="text-green-600 underline">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-4">My Groceries</h1>

      <div className="flex gap-2 mb-4 max-w-md">
        <input
          className="border p-2 flex-1 rounded"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="e.g. rice, chicken"
        />
        <button
          onClick={addItem}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {groceries.length === 0 ? (
        <p className="text-gray-500">No groceries added yet.</p>
      ) : (
        <ul className="bg-white rounded shadow max-w-md">
          {groceries.map((g, i) => (
            <li key={i} className="border-b p-2 last:border-none">
              {g}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}