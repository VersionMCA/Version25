"use client";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <ToastContainer />
      {children}
    </SessionProvider>
  );
};
