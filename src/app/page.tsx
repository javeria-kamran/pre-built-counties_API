"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { FETCH_COUNTRIES_LIST } from "../../graphql/queries";
import Link from "next/link";
import { GraphQLResult } from "@aws-amplify/api"; 

const client = generateClient();


interface Country {
  code: string;
  name: string;
  emoji: string;
}

const CountriesHomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const result = await client.graphql<GraphQLResult<any>>({
          query: FETCH_COUNTRIES_LIST,
        });

        // Explicitly checking the result type
        if ("data" in result && result.data?.countries) {
          setCountries(result.data.countries);
        } else {
          setError("No countries found.");
        }
      } catch (err) {
        setError("Failed to retrieve countries data.");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading)
    return <p className="text-yellow-400">Loading country list...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="p-10 bg-black text-orange-400 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-white">
        Explore Countries
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {countries.map((country: Country) => (
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
