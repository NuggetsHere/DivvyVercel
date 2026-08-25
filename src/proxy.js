// // src/middleware.js
// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => !!token,
//   },
// });

// export const config = {
//   matcher: ["/blogadmin/:path*"],
// };


// src/proxy.js
import { withAuth } from "next-auth/middleware";

export const proxy = withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

// Also provide default export for backwards compatibility
export default proxy;

export const config = {
  matcher: ["/blogadmin/:path*","/inventory/:path*"]

};