import {
  Geist,
  Geist_Mono,
  Silkscreen,
  Orbitron,
  Doto,
} from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/navbar/Navigation";

const doto = Doto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-doto",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixie = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-pixie",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-orb",
});

export const metadata = {
  title: "Version'25 : All India MCA Meet",
  description:
    "Version is an annual all India MCA meet conducted by the students of MCA at NIT, Trichy. Since it's conception in 1991, Version has aimed to bring the best students from MCA all over India to NIT, compete against each other and showcase their talent and potential. Version includes a variety of events which aims to challenge students to think out of the box and be creative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixie.variable} ${orbitron.variable} ${doto.variable} antialiased`}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
