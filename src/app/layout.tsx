'use client'
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../../library/apolloclient";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
