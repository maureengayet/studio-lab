import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  // pages: {
  // 	signIn: "/auth/signin", Use custom page
  // },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // callbacks: {
  // 	session({ session, token, user }) {
  // 		// Add custom properties to session here if needed, e.g.:
  // 		// session.user.id = token.sub;
  // 		return session;
  // 	},
  // },
});
