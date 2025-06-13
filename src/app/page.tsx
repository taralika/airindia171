import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-semibold mb-4">
        Air India 171 Memorial
      </h1>
      <p className="max-w-xl text-lg md:text-xl mb-8">
        A shared space to remember and honor everyone lost on Flight 171.
      </p>
      <Link
        href="/passengers"
        className="bg-accent-500 text-white rounded-md px-6 py-3 text-lg shadow hover:opacity-90 transition"
      >
        View Passenger List
      </Link>
    </main>
  );
}
