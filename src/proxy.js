// // // src/middleware.js
// // import { withAuth } from "next-auth/middleware";

// // export default withAuth({
// //   callbacks: {
// //     authorized: ({ token }) => !!token,
// //   },
// // });

// // export const config = {
// //   matcher: ["/blogadmin/:path*"],
// // };


// // // src/proxy.js
// // import { withAuth } from "next-auth/middleware";

// // export const proxy = withAuth({
// //   callbacks: {
// //     authorized: ({ token }) => !!token,
// //   },
// // });

// // // Also provide default export for backwards compatibility
// // export default proxy;

// // export const config = {
// //   matcher: ["/blogadmin/:path*","/inventory/:path*"]

// // };

// // src/proxy.js
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export const proxy = withAuth(
//   function proxy(req) {
//     const pathname = req.nextUrl.pathname;
//     const userRole = req.nextauth.token?.role;

//     // Roles or usernames permitted to access scan-out
//     const allowedScanOutRoles = ["admin", "scanner"];

//     // Intercept scan-out and check permissions
//     if (pathname.startsWith("/inventory/scan-out")) {
//       if (!allowedScanOutRoles.includes(userRole)) {
//         // Bounce unauthorized authenticated users back to main inventory
//         return NextResponse.redirect(new URL("/inventory", req.url));
//       }
//     }

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token, // Requires login for all matched paths
//     },
//     pages: {
//       signIn: "/login",
//     },
//   }
// );

// export default proxy;

// export const config = {
//   matcher: [
//     "/blogadmin/:path*",
//     "/inventory/:path*",
//   ],
// }

  // // src/proxy.js
  // import { withAuth } from "next-auth/middleware";
  // import { NextResponse } from "next/server";

  // export const proxy = withAuth(
  //   function proxy(req) {
  //     const pathname = req.nextUrl.pathname;
  //     const userRole = req.nextauth.token?.role;

  //     // Only 'admin' and 'scanner' can open scan-out
  //     if (pathname.startsWith("/inventory/scan-out")) {
  //       if (userRole !== "admin" && userRole !== "scanner") {
  //         return NextResponse.redirect(new URL("/inventory", req.url));
  //       }
  //     }

  //     return NextResponse.next();
  //   },
  //   {
  //     callbacks: {
  //       authorized: ({ token }) => !!token,
  //     },
  //     pages: {
  //       signIn: "/login",
  //     },
  //   }
  // );

  // export default proxy;

  // export const config = {
  //   matcher: [
  //     "/blogadmin/:path*",
  //     "/inventory/:path*",
  //   ],
  // };


  // src/proxy.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const proxy = withAuth(
  function proxy(req) {
    const pathname = req.nextUrl.pathname;
    const userRole = req.nextauth.token?.role;

    // Strict check: ONLY block /inventory/scan-out for unauthorized staff
    if (pathname.startsWith("/inventory/scan-out")) {
      const allowedScanOutRoles = ["admin", "scanner"];
      
      if (!allowedScanOutRoles.includes(userRole)) {
        // Redirect regular staff back to the standard scan page or main inventory
        return NextResponse.redirect(new URL("/inventory/scan", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Requires any valid login for matched routes
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default proxy;

export const config = {
  matcher: [
    "/blogadmin/:path*",
    "/inventory/:path*",
  ],
};