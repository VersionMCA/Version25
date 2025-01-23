import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/index.mjs";
import admins from "@/utilities/admins";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "secr3t",
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = admins.includes(user.email) ? "admin" : "user";

      return token;
    },
    async session({ session, token }) {
      const user = await prisma.user.findUnique({
        where: { id: token.sub },
        select: {
          collegeName: true,
          collegeRollNumber: true,
          phoneNumber: true,
        },
      });

      // Check if any profile field is incomplete
      session.user.incompleteProfile =
        !user?.collegeName || !user?.collegeRollNumber || !user?.phoneNumber;

      if (token) {
        // Assign user ID to session
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
