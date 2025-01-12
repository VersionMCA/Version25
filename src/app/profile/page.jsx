import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import { UserRound } from "lucide-react";
import UserDetailForm from "./UserDetailForm";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    redirect("/signin");
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="w-full mt-16  rounded-lg p-3 screen max-w-[700px]">
        <div className="px-2">
          <h1 className="text-2xl flex items-center gap-2 font-semibold w-fit">
            <UserRound color="#3b82f6" />
            <span>Profile</span>
          </h1>
          <span className="text-xs text-gray-400">
            Please complete your profile to register for events
          </span>
        </div>
        <div className="p-3">
          <UserDetailForm user={session?.user} />
        </div>
      </div>
    </div>
  );
}
