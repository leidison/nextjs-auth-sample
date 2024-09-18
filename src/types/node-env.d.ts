declare namespace NodeJS {
    export interface ProcessEnv {
        AUTH_SECRET: string
        AUTH_KEYCLOAK_ID: string
        AUTH_KEYCLOAK_SECRET: string
        AUTH_KEYCLOAK_ISSUER: string
        KEYCLOAK_ADMIN: string
        KEYCLOAK_ADMIN_PASSWORD: string
    }
}