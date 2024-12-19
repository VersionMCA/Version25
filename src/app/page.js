"use client";
import { signOut } from "next-auth/react";
import Calendar from "../components/home/Calendar";
import About from "../components/home/About";
export default function Home() {
  return (
    <div>
      <Calendar />
      <About />
      <button onClick={() => signOut()}> signOut</button>
    </div>
  );
}
