// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4e43cb0d3b8d2bb302a746f3619c3d26@o4511269963038720.ingest.us.sentry.io/4511269966512128",

  // Force a clean environment name on edge
  environment:
    process.env.VERCEL_ENV === "production"
      ? "production"
      : process.env.VERCEL_ENV || process.env.NODE_ENV || "development",

  sendDefaultPii: true,
});
