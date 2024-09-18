import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Adicionar Usuarios

      <div>
        <Link href="/usuarios">
          Voltar
        </Link>
      </div>
    </div>
  )
}
