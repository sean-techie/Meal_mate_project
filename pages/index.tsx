import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">MealMate 🍽️</h1>
      <p className="text-center mb-6 max-w-md">
        Add the groceries you have and get meal ideas instantly.
      </p>

      <Link
        href="/groceries"
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Get Started
      </Link>
    </div>
  );
}