import CredentialProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials;
        // fetch([{ id: "1", username: "superadmin", password: "superadmin" }])
        //   .then((res) => res.json())
        //   .then((data) => {
        //     const user = data.find(
        //       (item) => item.username === username && item.password === password,
        //     );
        //     if (user) {
        //       return user;
        //     } else {
        //       return null;
        //     }
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching user data:", error);
        //     return null;
        //   });

        const data = [{ id: "1", username: "superadmin", password: "superadmin" }];
        const user = data.find((item) => item.username === username && item.password === password);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    // async jwt({ token, user }) {
    //   if (user) token.id = user.id;
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (session?.user) session.user.id = token.id;
    //   return session;
    // },
  },
  // secret: process.env.NEXTAUTH_SECRET,
  // session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};
