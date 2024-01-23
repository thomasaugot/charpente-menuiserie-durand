// include all the code you want to see on every pages, such as a navbar or a footer, here:

import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charpente Menuiserie Durand",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./your-logo.jpg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} bg-darkBlue`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
