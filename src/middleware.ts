import { auth } from "@/auth"
import { NextResponse } from "next/server"

const publicRoutes = ['/']

export default auth((req) => {
    const {auth} = req
    const pathname = req.nextUrl.pathname

    const isPublicRoute = publicRoutes.includes(pathname)

    if (!isPublicRoute && !auth) {
        const loginUrl = new URL("/api/signin", req.nextUrl.origin);
        loginUrl.searchParams.set("callbackUrl", req.nextUrl.href);

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next()
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
