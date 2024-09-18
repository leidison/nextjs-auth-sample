import Link from "next/link"

export default async function Page() {
  return (
    <div>
      Listagem de Beneficiários

      <div>
        <Link href="/beneficiarios/novo">
          Novo Beneficiário
        </Link>
      </div>
    </div>
  )
}
