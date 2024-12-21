import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// import { Navbar } from "@/components/navbar/Navbar";
import Navbar from "@/components/nav2/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixie = Silkscreen({
  subsets: ["latin"], // Include the 'latin' subset
  weight: ["400", "700"], // Include specific weights (regular and bold)
  style: ["normal"], // Include styles
  display: "swap", // Ensures text remains visible during font loading
  variable: "--font-pixie",
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
        className={`${geistSans.variable} ${geistMono.variable} ${pixie.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
