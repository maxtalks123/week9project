import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth) {
    if (!auth.userId) {
      return "https://week9project-iota.vercel.app/";
      // return redirectToSignIn({
      //   returnBackUrl: "https://week9project-iota.vercel.app/",
      // });
    }
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
