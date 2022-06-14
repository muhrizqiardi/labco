import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      name: "Email & Password",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      pages: {
        signIn: "/signin",
      },
      async authorize(credentials) {
        await dbConnect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            throw new Error("No user found!");
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValid) {
            throw new Error("Could not log you in!");
          }

          return { email: user.email };
        } catch (error) {
          console.log({ error });
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // find user in database
      await dbConnect();

      let userData = await User.findOne(
        {
          email: session.user.email,
        },
        "_id fullName email role profilePicture bio"
      );

      return { ...session, user: userData };
    },
  },
});
