import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/sing-in',
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};