import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      let userExists;

      await dbConnect();

      // Find user by email
      try {
        await User.findOne({ email: user.email });
      } catch (error) {
        userExists = false;
      }

      // If user does not exist, create one
      if (!userExists) {
        let newUser;
        try {
          newUser = await User.create({
            email: user.email,
            fullName: user.name,
            role: "user",
          });
        } catch (error) {
          console.log(error);
        }
      }

      return true;
    },
  },
});
