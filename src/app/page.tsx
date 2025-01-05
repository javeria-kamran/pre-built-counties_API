'use client';

import { useQuery } from "@apollo/client";
import { FETCH_COUNTRIES_LIST } from "../../graphql/queries";
import Link from "next/link";

const CountriesHomePage = () => {
    const { data, loading, error } = useQuery(FETCH_COUNTRIES_LIST);

    if (loading) return <p className="text-yellow-400">Loading country list...</p>;
    if (error) return <p className="text-red-500">Failed to retrieve countries data.</p>;

    return (
        <main className="p-10 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-extrabold mb-8">Explore Countries</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {data.countries.map((country: any) => (
                    <li key={country.code} className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition">
                        <Link href={`/countries/${country.code}`} className="text-blue-400 font-semibold text-lg">
                            {country.name} {country.emoji}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default CountriesHomePage;