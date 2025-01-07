'use client'

import { Amplify } from "aws-amplify";
import "./globals.css";

Amplify.configure({
  API: {
    GraphQL :{
      endpoint: "https://countries.trevorblades.com/",
      defaultAuthMode: "none"
    }
  }
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
       {children}
      </body>
    </html>
  );
}