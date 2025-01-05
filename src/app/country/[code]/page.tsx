"use client";

import { useQuery } from "@apollo/client";
import { FETCH_COUNTRY_INFO } from "../../../../graphql/queries";
import { useParams } from "next/navigation";
import Link from "next/link";

const CountryDetails = () => {
  const params = useParams();
  const countryCode = params?.code as string;
  const { data, loading, error } = useQuery(FETCH_COUNTRY_INFO, {
    variables: { code: countryCode },
  });

  if (loading)
    return <p className="text-yellow-400">Fetching country data...</p>;
  if (error) return <p className="text-red-500">Oops! Something went wrong.</p>;

  const { name, emoji, capital, currency, languages } = data.country;

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
        {languages.map((lang: any) => lang.name).join(", ")}
      </p>{" "}
      <br />
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
