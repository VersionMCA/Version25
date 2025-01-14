"use client";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "jotai";

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <Provider>
        <ToastContainer />
        {children}
      </Provider>
    </SessionProvider>
  );
};
