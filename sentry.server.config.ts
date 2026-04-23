// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4e43cb0d3b8d2bb302a746f3619c3d26@o4511269963038720.ingest.us.sentry.io/4511269966512128",

  // Force a clean environment name on the server
  environment:
    process.env.VERCEL_ENV === "production"
      ? "production"
      : process.env.VERCEL_ENV || process.env.NODE_ENV || "development",

  sendDefaultPii: true,
});
