import { cookies } from "next/headers"
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
        console.log("auth response", res)
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
      console.log("session session", session)
      console.log("session token", token)
      console.log("session user", user)
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, account, user, session }) {
      console.log("jwt token", token)
      console.log("jwt account", account)
      console.log("jwt user", user)
      console.log("jwt session", session)
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        // @ts-ignore
        console.log("blauser")
        token.accessToken = user?.access
      }

      return token
    },
    async signIn({ user, account }) {
      //@ts-ignore
      cookies().set("accessToken", user?.access)

      console.log("signIn user", user)
      console.log("signIn account", account)
      return !!user
    },
    async redirect({ url, baseUrl }) {
      console.log("redirect url", url)
      console.log("redirect baseUrl", baseUrl)
      return url
    },
  },
}

export default NextAuth(authOptions)
