import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Listagem de Usuários

      <div>
        <Link href="/usuarios/novo">
          Novo Usuário
        </Link>
      </div>

      <div>
        <div>
          <Link href="/usuarios/1">
            Usuário de exemplo 1
          </Link>
        </div>

        <div>
          <Link href="/usuarios/2">
            Usuário de exemplo 2
          </Link>
        </div>
      </div>
    </div>
  )
}
