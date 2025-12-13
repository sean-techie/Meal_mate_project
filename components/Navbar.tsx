import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MealMate</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/groceries">Groceries</Link>
      </div>
    </nav>
  );
}