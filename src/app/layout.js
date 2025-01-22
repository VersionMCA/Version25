import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/navbar/Navigation";
import ShootingStars from "@/components/ui/ShootingStars";
import { mina, aldrich, iceland, audiowide, orbitron, doto } from "./fonts";

export const metadata = {
  title: "Version'25 : All India MCA Meet",
  description:
    "Version is an annual all India MCA meet conducted by the students of MCA at NIT, Trichy. Since it's conception in 1991, Version has aimed to bring the best students from MCA all over India to NIT, compete against each other and showcase their talent and potential. Version includes a variety of events which aims to challenge students to think out of the box and be creative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Version25" />
      </head>
      <body
        className={` ${mina.variable} ${aldrich.variable} ${iceland.variable} ${audiowide.variable}  ${orbitron.variable} ${doto.variable} antialiased `}
      >
        <Providers>
          <ShootingStars />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
