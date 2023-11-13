import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { username, password } = credentials;

        try {
          const response = await fetch("http://34.70.16.113:8080/api/v1/super-admin/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          if (response.ok) {
            const user = await response.json();
            if (user.results) {
              return user;
            } else {
              return null;
            }
          } else {
            console.error("Error fetching user data. HTTP Status:", response.status);
            return null;
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) token.results = user.results;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.results = token.results;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};
