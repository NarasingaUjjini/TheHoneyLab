/**
 * Renders 3 featured honey products on the homepage
 */

(function () {
  "use strict";

  var container = document.getElementById("featured-products");
  if (!container || !window.HoneyProducts) return;

  var featured = window.HoneyProducts.filter(function (p) {
    return p.available;
  }).slice(0, 3);

  function formatPrice(amount) {
    return "$" + (amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2));
  }

  function formatTitle(product) {
    return product.name + " \u2014 Batch " + product.batch;
  }

  container.innerHTML = featured
    .map(function (product) {
      var size = product.sizes[1] || product.sizes[0];
      return (
        '<article class="showcase-card">' +
        '<a class="showcase-card__link" href="honey.html#product-' +
        product.id +
        '">' +
        '<div class="showcase-card__image showcase-card__image--' +
        product.tone +
        '" role="img" aria-label="' +
        formatTitle(product) +
        ' jar">' +
        '<span class="batch-stamp batch-stamp--card">Batch ' +
        product.batch +
        "</span>" +
        "</div>" +
        '<div class="showcase-card__body">' +
        '<p class="label">' +
        product.region +
        "</p>" +
        "<h3 class=\"showcase-card__title\">" +
        formatTitle(product) +
        "</h3>" +
        '<p class="showcase-card__flavor">' +
        product.flavor +
        "</p>" +
        '<p class="showcase-card__note">' +
        product.batchNote +
        "</p>" +
        '<p class="showcase-card__price">' +
        size.oz +
        " oz from " +
        formatPrice(size.price) +
        " <span>(" +
        formatPrice(product.pricePerLb) +
        "/lb)</span></p>" +
        "</div></a></article>"
      );
    })
    .join("");
})();
