import CredentialsProvider from "next-auth/providers/credentials";

const login = async (url, username, password) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const user = await response.json();
    return user.results ? user : null;
  }

  return null;
};

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { username, password } = credentials;

        try {
          let user = await login(process.env.SUPER_ADMIN_LOGIN_URL, username, password);
          if (!user) {
            user = await login(process.env.ADMIN_LOGIN_URL, username, password);
          }

          if (!user) {
            console.error("Invalid Username And Password");
          }

          return user;
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
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
};
