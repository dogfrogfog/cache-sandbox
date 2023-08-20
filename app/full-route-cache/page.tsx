import Link from "next/link";

export default async function Page() {
  const response1 = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Warsaw",
    {
      cache: "no-store",
    }
  );
  const noCacheData = await response1.json();

  const response2 = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Warsaw",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const revalidatedData = await response2.json();

  return (
    <section>
      <h1 className="text-xl mb-4">Full route cache</h1>
      <p className="text-md mb-8">
        run production build and try to refresh this page
      </p>
      <div className="mb-4 bg-white p-4 shadow">
        <h1 className="text-2xl font-bold mb-4">{noCacheData.datetime}</h1>
        <p className="text-gray-500">no cache data</p>
      </div>
      <div className="bg-white p-4 shadow">
        <h1 className="text-2xl font-bold mb-4">{revalidatedData.datetime}</h1>
        <p className="text-gray-500">10 sec revalidation data</p>
      </div>
    </section>
  );
}
