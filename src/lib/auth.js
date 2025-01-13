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
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "secr3t",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (dbUser) {
          // attaching details , add if needed :)
          token.dbUser = {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            image: dbUser.image,
            collegeName: dbUser.collegeName,
            collegeRollNumber: dbUser.collegeRollNumber,
            phoneNumber: dbUser.phoneNumber,
            createdAt: dbUser.createdAt,
            updatedAt: dbUser.updatedAt,
          };
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Fetch user details from the database
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
        session.dbUser = dbUser || token.dbUser; // use on frontend
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
