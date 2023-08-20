import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <h1 className="text-5xl sm mb-8">Cache layers:</h1>
      <Link
        className="block text-xl mb-4 hover:underline"
        href="/request-memoization"
      >
        /request-memoization
      </Link>
      <Link
        className="block text-xl mb-4 hover:underline"
        href="/full-route-cache"
      >
        /full-route-cache
      </Link>
    </main>
  );
}
