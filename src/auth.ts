import NextAuth from "next-auth"
import { default as Keycloak } from "next-auth/providers/keycloak"
import keycloakLogout from "./app/lib/keycloak-logout"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Keycloak],
    pages: {
        signIn: "/api/signin",
    },
    callbacks: {
        async jwt({ token, account }) {
            // Quando a conta estiver disponível, adicione o accessToken ao token JWT
            if (account) {
                token.exp = account.expires_at
                token.id_token = account.id_token
                token.provider = account.provider
            }
            return token
        },
        async session({ session, token }: any) {
            // Adicione o accessToken à sessão
            session.id_token = token.id_token
            return session
        },
    },
    events: {
        signOut: async ({ token }: ay) => {
            const { provider, id_token } = token

            if (provider == 'keycloak') {
                await keycloakLogout(id_token)
            }
        }
    }
})