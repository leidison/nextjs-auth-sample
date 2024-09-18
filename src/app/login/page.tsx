import { signIn } from "@/auth"

export default async function Page() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("keycloak")
      }}
    >
      <button type="submit">Signin with Keycloak</button>
    </form>
  )
}
