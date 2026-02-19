export { default } from "next-auth/middleware";

export const config = { 
  // This ensures ONLY the blogadmin route is protected
  matcher: ["/blogadmin/:path*"] 
};