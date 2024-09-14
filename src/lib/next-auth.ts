import { cookies } from "next/headers"
import NextAuth, { type NextAuthOptions, type User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { routePaths } from "@/config/routes"
import { getAuthApi } from "@/lib/api/auth/auth-api"

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: routePaths.auth.login,
    error: routePaths.auth.login,
  },
  // Configure one or more authentication providers
  // jwt: {
  //   async encode({ token }): Promise<string> {
  //     // return a custom encoded JWT string
  //     return ""
  //   },
  //   async decode({ token }): Promise<any> {
  //     // return a `JWT` object, or `null` if decoding failed
  //     return token
  //   },
  // },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)

          const res = await getAuthApi("server").login({
            username: credentials?.username as string,
            password: credentials?.password as string,
          })
          // If no error and we have user data, return it
          if (res) {
            return {
              id: 1,
              username: credentials?.username,
              role: "Admin",
              ...res,
            } as User
          } else {
            // If the user is not found, you can throw an error
            throw new Error("User not found")
          }
        } catch (error) {
          // Reject with an error and the error message will be displayed on the error page
          throw new Error("Authorization failed (check login and password)")
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user?.access
      }

      return token
    },
    async signIn({ user }) {
      cookies().set("accessToken", user?.access)
      return !!user
    },
    async redirect({ url }) {
      return url
    },
  },
}

export default NextAuth(authOptions)
