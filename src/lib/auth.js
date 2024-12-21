import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/index.mjs";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "database", // jwt can also be used
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    redirect() {
      return "/";
    },
  },
  pages: {
    signIn: "/signin",
  },
};
