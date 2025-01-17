"use client";
import { adminCheck } from "@/utilities/admins";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const page = () => {
  // admin check
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) adminCheck(session.user.email);
  }, [session]);

  return <div>page</div>;
};

export default page;
