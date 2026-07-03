/**
 * Ecwid store configuration
 * ─────────────────────────
 * 1. Sign up at ecwid.com and create your store
 * 2. Replace YOUR_STORE_ID below with your numeric Store ID
 *    (Ecwid admin → Settings → General → Store ID)
 * 3. In products.js, set ecwidProductId for each honey
 *    (Ecwid admin → Products → open product → ID is in the URL)
 * 4. Uncomment the Ecwid script tag in products.html
 */

window.EcwidConfig = {
  storeId: "YOUR_STORE_ID",
  /** Option name in Ecwid if you use one product with size variants (e.g. "Size") */
  sizeOptionName: "Size",
};
