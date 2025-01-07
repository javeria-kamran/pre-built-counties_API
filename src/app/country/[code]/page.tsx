"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { FETCH_COUNTRY_INFO } from "../../../../graphql/queries";
import { useParams } from "next/navigation";
import Link from "next/link";
import { GraphQLResult } from "@aws-amplify/api";

const client = generateClient();
interface Language {
  name: string;
}

interface Country {
  name: string;
  emoji: string;
  capital: string;
  currency: string;
  languages: Language[];
}

const CountryDetails = () => {
  const params = useParams();
  const countryCode = params?.code as string;
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      try {
        const result = await client.graphql<GraphQLResult<any>>({
          query: FETCH_COUNTRY_INFO,
          variables: { code: countryCode },
        });

        if ("data" in result && result.data?.country) {
          setCountry(result.data.country);
        } else {
          setError("Country data not found.");
        }
      } catch (err) {
        setError("Failed to fetch country data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryCode]);

  if (loading)
    return <p className="text-yellow-400">Fetching country data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!country) return <p className="text-red-700">Country not found.</p>;

  const { name, emoji, capital, currency, languages } = country;

  return (
    <section className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-6 text-orange-400">
        {name} {emoji}
      </h1>
      <p>
        <strong className="font-semibold">
          Capital <span className="text-orange-400">:</span>
        </strong>{" "}
        {capital}
      </p>
      <br />
      <p>
        <strong className="font-semibold">
          Currency <span className="text-orange-400">:</span>
        </strong>{" "}
        {currency}
      </p>{" "}
      <br />
      <p>
        <strong className="font-semibold">
          Languages <span className="text-orange-400">:</span>
        </strong>{" "}
        {languages.map((lang: Language) => lang.name).join(", ")}
      </p>{" "}
      <br />
      <Link
        href="/"
        className="mt-6 inline-block text-blue-400 hover:underline"
      >
        ← Back to Home
      </Link>
    </section>
  );
};

export default CountryDetails;
