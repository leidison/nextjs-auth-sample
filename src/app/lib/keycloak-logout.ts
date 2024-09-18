export default async function keycloakLogout(idToken: string) {
    try {
        const params = new URLSearchParams()
        params.append('id_token_hint', idToken)

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