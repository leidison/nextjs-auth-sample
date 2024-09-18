import NextAuth from "next-auth"
import { default as Keycloak } from "next-auth/providers/keycloak"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Keycloak],
    pages: {
        signIn: "/api/signin",
        signOut: "/api/signout",
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
        signOut: async ({ session, token }: ay) => {
            const { provider, id_token } = token

            console.log('token', token)

            if (provider == 'keycloak') {
                try {
                    // Add the id_token_hint to the query string
                    const params = new URLSearchParams()
                    params.append('id_token_hint', id_token)
                    // const { status, statusText } = await axios.get(`${keycloak.options.issuer}/protocol/openid-connect/logout?${params.toString()}`)

                    const resp = await fetch(`${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/logout?${params.toString()}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })

                    const text = await resp.text()

                    // The response body should contain a confirmation that the user has been logged out
                    console.log("Completed post-logout handshake", text)
                }
                catch (e: any) {
                    console.error("Unable to perform post-logout handshake", e?.code || e)
                }
            }
        }
    }
})