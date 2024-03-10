import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/createprofile"],
  // afterAuth(auth) {
  //   if (!auth.userId) {
  //I attempted to use the docs to return the homepage with radix on so can sign in there but couldnt get it working right.
  // return Protect({
  //   unauthenticatedURL: "https://week9project-iota.vercel.app/",
  // });
  //       return redirectToSignIn({
  //         returnBackUrl: "https://week9project-iota.vercel.app/",
  //       });
  //     }
  //     if (auth.userId && !auth.isPublicRoute) {
  //       return NextResponse.next();
  //     }
  //     return NextResponse.next();
  //   },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
