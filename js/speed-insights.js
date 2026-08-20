// Vercel Speed Insights initialization
// This script initializes the Speed Insights queue and will be automatically
// loaded by Vercel when the site is deployed.

(function() {
  // Initialize the Speed Insights queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
})();
