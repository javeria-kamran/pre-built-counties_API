'use client'
import { useQuery } from "@apollo/client";
import { FETCH_COUNTRIES_LIST } from "../../graphql/queries";
import Link from "next/link";

// Define the type for Country
interface Country {
  code: string;
  name: string;
  emoji: string;
}

const CountriesHomePage = () => {
  const { data, loading, error } = useQuery(FETCH_COUNTRIES_LIST);

  if (loading)
    return <p className="text-yellow-400">Loading country list...</p>;
  if (error)
    return <p className="text-red-500">Failed to retrieve countries data.</p>;

  return (
    <main className="p-10 bg-black text-orange-400 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-white">
        Explore Countries
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {data.countries.map((country: Country) => ( 
          <li
            key={country.code}
            className="p-6 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <Link
              href={`/country/${country.code}`}
              className="text-orange-400 font-semibold text-lg"
            >
              {country.name} {country.emoji}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CountriesHomePage;
