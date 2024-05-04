//app/libs/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt";

const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            console.log("Not Inputs");
            return null;
          }
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            console.log("No user found");
            return null;
          }
          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          if (!passwordMatch) {
            console.log("Password incorrect");
            return null;
          }
          // Check if the user's status is "Active"
          if (existingUser.status !== 'Active') {
            throw new Error("User not active. Please contact administrator");
          }
          const user = {
            id: existingUser.id,
            name: existingUser.displayName,
            email: existingUser.email,
          };
          
          console.log(user);
          return user;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
      
      
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

export { authOptions };
