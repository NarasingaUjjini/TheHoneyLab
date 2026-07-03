/**
 * Ecwid cart bridge — connects shop cards to Ecwid Cart API
 *
 * Requires:
 *   ecwid-config.js (store ID)
 *   Ecwid script on products.html
 *
 * Docs: https://api.ecwid.com/ — Cart.addProduct
 */

(function () {
  "use strict";

  var config = window.EcwidConfig || {};
  var storeId = config.storeId;
  var sizeOptionName = config.sizeOptionName || "Size";
  var apiReady = false;
  var pending = [];

  function isConfigured() {
    return storeId && storeId !== "YOUR_STORE_ID";
  }

  function runWhenReady(fn) {
    if (apiReady && window.Ecwid && window.Ecwid.Cart) {
      fn();
      return;
    }
    pending.push(fn);
  }

  function flushPending() {
    apiReady = true;
    pending.forEach(function (fn) {
      fn();
    });
    pending = [];
  }

  function initApi() {
    if (!window.Ecwid || !window.Ecwid.OnAPILoaded) {
      return;
    }
    window.Ecwid.OnAPILoaded.add(function () {
      flushPending();
    });
    if (window.Ecwid.API && window.Ecwid.API.isInitialized && window.Ecwid.API.isInitialized()) {
      flushPending();
    }
  }

  function showFeedback(message, isError) {
    var el = document.getElementById("cart-feedback");
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
    el.classList.toggle("cart-feedback--error", !!isError);
    window.setTimeout(function () {
      el.hidden = true;
    }, 4000);
  }

  function add(product, sizeOz, quantity) {
    if (!product.available) {
      showFeedback("This batch is sold out.", true);
      return;
    }

    if (!isConfigured() || !product.ecwidProductId) {
      showFeedback(
        "Connect Ecwid: set store ID in ecwid-config.js and ecwidProductId in products.js.",
        true
      );
      return;
    }

    var ecwidId = Number(product.ecwidProductId);
    var qty = Math.max(1, Math.min(99, quantity || 1));

    runWhenReady(function () {
      try {
        var options = {};
        if (product.sizes.length > 1) {
          options[sizeOptionName] = sizeOz + " oz";
        }

        window.Ecwid.Cart.addProduct(ecwidId, {
          quantity: qty,
          options: options,
          callback: function (success) {
            if (success) {
              showFeedback("Added to cart.");
              if (window.Ecwid.Cart.open) {
                window.Ecwid.Cart.open();
              }
            } else {
              showFeedback("Could not add to cart. Check Ecwid product ID.", true);
            }
          },
        });
      } catch (err) {
        showFeedback("Cart error. See browser console.", true);
        console.error(err);
      }
    });
  }

  window.EcwidCart = { add: add, isConfigured: isConfigured };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApi);
  } else {
    initApi();
  }

  window.addEventListener("load", initApi);
})();
