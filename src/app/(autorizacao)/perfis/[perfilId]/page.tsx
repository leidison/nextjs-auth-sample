import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Editar Perfil

      <div>
        <Link href="/perfis">
          Voltar
        </Link>
      </div>
    </div>
  )
}
