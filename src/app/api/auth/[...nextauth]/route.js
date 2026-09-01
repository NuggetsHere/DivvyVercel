// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
  
//     session: {
//     strategy: "jwt",
//     maxAge: 1 * 60 * 5 , // (in seconds)
//     updateAge: 0,        // Update the timer on every single request
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Admin Login",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         // Define these in your .env file
//         const adminUser = process.env.ADMIN_USERNAME;
//         const adminPass = process.env.ADMIN_PASSWORD;

//         if (
//           credentials.username === adminUser &&
//           credentials.password === adminPass
//         ) {
//           return { id: "1", name: "Admin" };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // We will create this custom login page
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });


// export { handler as GET, handler as POST };


// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Example: Primary Admin
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Admin", username: credentials.username, role: "admin" };
        }

        // Example: Standard / Non-Scanner Staff
        if (
          credentials?.username === process.env.STAFF_USERNAME &&
          credentials?.password === process.env.STAFF_PASSWORD
        ) {
          return { id: "2", name: "Staff", username: credentials.username, role: "staff" };
        }

        // Example: Dedicated Scan-Out Operator
        if (
          credentials?.username === process.env.SCANNER_USERNAME &&
          credentials?.password === process.env.SCANNER_PASSWORD
        ) {
          return { id: "3", name: "Scanner", username: credentials.username, role: "scanner" };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };