// app/admin/layout.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { adminCheck } from "@/utilities/admins";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  if (session && session.user) adminCheck(session.user.email);

  return <div>{children}</div>;
}
