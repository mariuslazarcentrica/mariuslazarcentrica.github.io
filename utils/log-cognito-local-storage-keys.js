/**
 * Debug utility – logs all Cognito-related localStorage keys and their values
 * to the browser console. For development/debugging use only; do NOT use in
 * production as it may expose sensitive authentication tokens.
 *
 * Usage: paste or run this script in the browser DevTools console.
 */
(() => {
  Object.keys(localStorage)
    .filter(key => key.startsWith('CognitoIdentityServiceProvider'))
    .forEach(key => console.log(`${key}:`, localStorage.getItem(key)));
})();
