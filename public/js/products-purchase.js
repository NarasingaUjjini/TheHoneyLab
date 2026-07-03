/**
 * Purchase grid for products.html
 * Renders shop cards + wires quantity / size / add to cart
 */

(function () {
  "use strict";

  var grid = document.getElementById("shop-grid");
  if (!grid || !window.HoneyProducts) return;

  function formatPrice(n) {
    return "$" + (n % 1 === 0 ? n.toFixed(0) : n.toFixed(2));
  }

  function formatTitle(product) {
    return product.name + " \u2014 Batch " + product.batch;
  }

  function buildSizeOptions(product) {
    return product.sizes
      .map(function (s, i) {
        return (
          '<option value="' +
          s.oz +
          '" data-price="' +
          s.price +
          '"' +
          (i === 1 ? " selected" : "") +
          ">" +
          s.oz +
          " oz \u2014 " +
          formatPrice(s.price) +
          "</option>"
        );
      })
      .join("");
  }

  function renderCard(product) {
    var defaultSize = product.sizes[1] || product.sizes[0];
    var soldOut = !product.available;

    return (
      '<article class="shop-card' +
      (soldOut ? " shop-card--sold-out" : "") +
      '" data-product-id="' +
      product.id +
      '" data-ecwid-product-id="' +
      (product.ecwidProductId || "") +
      '">' +
      '<div class="shop-card__image shop-card__image--' +
      product.tone +
      '" role="img" aria-label="' +
      formatTitle(product) +
      '">' +
      '<span class="img-placeholder__text">Product photo</span>' +
      "</div>" +
      '<div class="shop-card__body">' +
      "<h2 class=\"shop-card__name\">" +
      formatTitle(product) +
      "</h2>" +
      '<p class="shop-card__price" data-price-display>' +
      formatPrice(defaultSize.price) +
      "</p>" +
      '<p class="shop-card__tagline">' +
      (product.tagline || "") +
      "</p>" +
      (soldOut
        ? '<p class="shop-card__status">Sold out</p>'
        : '<div class="shop-card__controls">' +
          '<label class="shop-card__label" for="size-' +
          product.id +
          '">Size</label>' +
          '<select class="input shop-card__size" id="size-' +
          product.id +
          '" data-size-select>' +
          buildSizeOptions(product) +
          "</select>" +
          '<label class="shop-card__label" for="qty-' +
          product.id +
          '">Qty</label>' +
          '<div class="qty-picker">' +
          '<button type="button" class="qty-picker__btn" data-qty-minus aria-label="Decrease quantity">\u2212</button>' +
          '<input type="number" class="qty-picker__input" id="qty-' +
          product.id +
          '" value="1" min="1" max="99" data-qty-input aria-label="Quantity" />' +
          '<button type="button" class="qty-picker__btn" data-qty-plus aria-label="Increase quantity">+</button>' +
          "</div>" +
          '<button type="button" class="btn btn--primary shop-card__cart" data-add-to-cart>Add to cart</button>' +
          "</div>") +
      "</div></article>"
    );
  }

  grid.innerHTML = window.HoneyProducts.map(renderCard).join("");

  grid.addEventListener("change", function (e) {
    var select = e.target.closest("[data-size-select]");
    if (!select) return;
    var card = select.closest(".shop-card");
    var option = select.options[select.selectedIndex];
    var priceEl = card.querySelector("[data-price-display]");
    if (priceEl && option) {
      priceEl.textContent = formatPrice(parseFloat(option.getAttribute("data-price")));
    }
  });

  grid.addEventListener("click", function (e) {
    var card = e.target.closest(".shop-card");
    if (!card) return;

    var input = card.querySelector("[data-qty-input]");
    var val = parseInt(input.value, 10) || 1;

    if (e.target.closest("[data-qty-minus]")) {
      input.value = String(Math.max(1, val - 1));
    }
    if (e.target.closest("[data-qty-plus]")) {
      input.value = String(Math.min(99, val + 1));
    }

    if (e.target.closest("[data-add-to-cart]")) {
      var productId = card.getAttribute("data-product-id");
      var product = window.HoneyProducts.find(function (p) {
        return p.id === productId;
      });
      if (!product) return;

      var sizeSelect = card.querySelector("[data-size-select]");
      var sizeOz = sizeSelect ? parseInt(sizeSelect.value, 10) : product.sizes[0].oz;
      var qty = parseInt(input.value, 10) || 1;

      if (window.EcwidCart && window.EcwidCart.add) {
        window.EcwidCart.add(product, sizeOz, qty);
      }
    }
  });
})();
