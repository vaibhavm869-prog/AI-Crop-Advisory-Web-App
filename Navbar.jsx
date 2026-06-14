import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">AgriChat</h1>

        <div className="flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </div>

        <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold">
         V
        </div>
      </div>
    </nav>
  );
}