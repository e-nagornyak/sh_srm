import NextAuth, { type NextAuthOptions, type User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { routePaths } from "@/config/routes"
import { authAPI } from "@/lib/api/auth/auth-api"

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: routePaths.auth.login,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        console.log("credentials", credentials)

        const res = await authAPI.login({
          username: credentials?.username as string,
          password: credentials?.password as string,
        })

        // If no error and we have user data, return it
        if (res) {
          return {
            id: "id",
            ...credentials,
            ...res,
          } as User
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      console.log("session", session)
      console.log("token", token)
      console.log("user", user)
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, account }) {
      console.log("token", token)
      console.log("account", account)
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
    async signIn({ user, account }) {
      console.log("user", user)
      console.log("account", account)
      return !!user
    },
    async redirect({ url, baseUrl }) {
      console.log("url", url)
      console.log("baseUrl", baseUrl)
      return url
    },
  },
}

export default NextAuth(authOptions)
