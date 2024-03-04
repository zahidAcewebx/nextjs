import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user.data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],


  callbacks: {
    // Callback Reff: https://stackoverflow.com/questions/71185287/pass-more-data-to-session-in-next-auth
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)
      return { ...token, ...user };
    },
    async session({ token }) {
      return {
        user: {
          id: token.id,
          userName: token.fullName,
          accessToken: token.accessToken,
          userSettings:token.global_options,
          image:
            "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
            
        },
        
      };
    },
  },
});

export { handler as GET, handler as POST };
