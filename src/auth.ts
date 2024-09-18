import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Keycloak],
    pages: {
        signIn: "/api/signin",
    },
    callbacks: {
        async jwt({ token, account }) {
            // Quando a conta estiver disponível, adicione o accessToken ao token JWT
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }: any) {
            // Adicione o accessToken à sessão
            session.accessToken = token.accessToken
            return session
        },
    },
})