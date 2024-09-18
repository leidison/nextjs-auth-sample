import type { Metadata } from "next"
import Link from "next/link"

import { auth } from "@/auth"
import Logout from "./components/logout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next.js Sample",
  description: "Exemplo com autenticacao",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <html lang="en">
      <body>
        <main>
          <div>
            <Link href="/">
              Home
            </Link>

            {!session && <>|
              <Link href="/dashboard">
                Login
              </Link>
            </>}

            {session && <>
              {' | '}
              <Link href="/dashboard">
                Dashboard
              </Link>
              {' | '}
              <Link href="/usuarios">
                Usuários
              </Link>
              {' | '}
              <Link href="/perfis">
                Perfis
              </Link>
            </>}
          </div>

          {session && <>
          <br />
          <div>
            Usuário logado: {session?.user?.name}

            <Logout/>
          </div>
          </>}

          <br />

          {children}
        </main>
      </body>
    </html>
  );
}
