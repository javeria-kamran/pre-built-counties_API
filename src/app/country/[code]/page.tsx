'use client';

import { useQuery } from "@apollo/client";
import { FETCH_COUNTRY_INFO } from "../../../../graphql/queries";
import { useParams } from "next/navigation";

const CountryDetails = () => {
    const params = useParams();
    const countryCode = params?.code as string;
    const { data, loading, error } = useQuery(FETCH_COUNTRY_INFO, {
        variables: { code: countryCode }
    });

    if (loading) return <p className="text-yellow-400">Fetching country data...</p>;
    if (error) return <p className="text-red-500">Oops! Something went wrong.</p>;

    const { name, emoji, capital, currency, languages } = data.country;

    return (
        <section className="p-10 bg-gray-800 min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-6">{name} {emoji}</h1>
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Currency:</strong> {currency}</p>
            <p><strong>Languages:</strong> {languages.map((lang: any) => lang.name).join(", ")}</p>
            <a href="/" className="mt-6 inline-block text-blue-400 hover:underline">← Back to Home</a>
        </section>
    );
}

export default CountryDetails;
