import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Listagem de Perfis

      <div>
        <Link href="/perfis/novo">
          Novo Perfil
        </Link>
      </div>

      <div>
        <div>
          <Link href="/perfis/1">
            Perfil de exemplo 1
          </Link>
        </div>

        <div>
          <Link href="/perfis/2">
            Perfil de exemplo 2
          </Link>
        </div>
      </div>
    </div>
  )
}
