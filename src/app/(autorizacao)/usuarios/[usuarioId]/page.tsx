import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Editar Usuário

      <div>
        <Link href="/usuarios">
          Voltar
        </Link>
      </div>
    </div>
  )
}
