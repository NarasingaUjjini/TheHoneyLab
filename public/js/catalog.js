/**
 * Renders the honey catalog from window.HoneyProducts
 * Outputs semantic HTML with data-* attributes for e-commerce hooks
 */

(function () {
  "use strict";

  var container = document.getElementById("honey-catalog");
  if (!container || !window.HoneyProducts) return;

  function formatPrice(amount) {
    return "$" + (amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2));
  }

  function formatTitle(product) {
    return product.name + " \u2014 Batch " + product.batch;
  }

  function renderSizes(product) {
    return product.sizes
      .map(function (size) {
        return (
          '<span class="catalog-entry__size" data-size-oz="' +
          size.oz +
          '" data-price="' +
          size.price +
          '">' +
          size.oz +
          " oz \u00b7 " +
          formatPrice(size.price) +
          "</span>"
        );
      })
      .join("");
  }

  function renderEntry(product, index) {
    var title = formatTitle(product);
    var availability = product.available
      ? '<span class="catalog-entry__status">Available</span>'
      : '<span class="catalog-entry__status catalog-entry__status--sold">Sold out</span>';

    return (
      '<article class="catalog-entry catalog-entry--' +
      product.tone +
      (index % 2 === 1 ? " catalog-entry--reverse" : "") +
      '" id="product-' +
      product.id +
      '" data-product-id="' +
      product.id +
      '" data-sku="' +
      product.sku +
      '" data-batch="' +
      product.batch +
      '" data-available="' +
      product.available +
      '" data-price-per-lb="' +
      product.pricePerLb +
      '" itemscope itemtype="https://schema.org/Product">' +
      '<meta itemprop="sku" content="' +
      product.sku +
      '" />' +
      '<div class="catalog-entry__image-wrap">' +
      '<div class="catalog-entry__image catalog-entry__image--' +
      product.tone +
      '" role="img" aria-label="' +
      title +
      ' jar — photo coming soon">' +
      '<span class="batch-stamp">Batch ' +
      product.batch +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="catalog-entry__body">' +
      '<header class="catalog-entry__header">' +
      '<p class="label catalog-entry__origin">' +
      product.region +
      " \u00b7 " +
      product.season +
      "</p>" +
      '<h3 class="catalog-entry__title" itemprop="name">' +
      title +
      "</h3>" +
      availability +
      "</header>" +
      '<p class="catalog-entry__flavor" itemprop="description">' +
      product.flavor +
      "</p>" +
      '<p class="catalog-entry__batch-note">' +
      product.batchNote +
      "</p>" +
      '<footer class="catalog-entry__pricing">' +
      '<div class="catalog-entry__sizes" itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer">' +
      '<meta itemprop="priceCurrency" content="USD" />' +
      renderSizes(product) +
      "</div>" +
      '<p class="catalog-entry__per-lb">' +
      formatPrice(product.pricePerLb) +
      " / lb</p>" +
      "</footer>" +
      '<a class="catalog-entry__link" href="products.html" data-add-to-cart="' +
      product.id +
      '">' +
      (product.available ? "Order this batch" : "Notify me") +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  var list =
    '<div class="catalog-register">' +
    window.HoneyProducts.map(function (product, i) {
      return '<div>' + renderEntry(product, i) + "</div>";
    }).join("") +
    "</div>";

  container.innerHTML = list;
})();
