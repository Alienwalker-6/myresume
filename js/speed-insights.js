// Vercel Speed Insights initialization
// This module imports and initializes the @vercel/speed-insights package
// to track web vitals and performance metrics for the site.

import { injectSpeedInsights } from './speed-insights-lib.mjs';

// Initialize Speed Insights
// When deployed on Vercel with Speed Insights enabled in the dashboard,
// this will automatically start tracking web vitals and performance metrics.
injectSpeedInsights({
  debug: false, // Set to true to enable debug logging
});
