import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        
        
        if (user && user.password === credentials?.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: "any-secret-string", 
});

export { handler as GET, handler as POST };