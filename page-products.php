<?php
if (!defined('ABSPATH')) {
    exit;
}
$GLOBALS['thl_show_footer_tagline'] = false;
get_header();
?>
<main id="main">
  <div class="page-hero">
    <div class="container container--narrow">
      <p class="label label--moss">Shop</p>
      <h1 class="page-hero__title">Order honey</h1>
      <p class="page-hero__lead">
        8 and 12 oz jars. Pickup in El Cajon. Shipping around California.
      </p>
      <p class="page-hero__lead">
        For tasting notes and where each batch came from, see the <a href="<?php echo esc_url(thl_get_page_url('honey')); ?>">honey catalog</a>.
      </p>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>

  <div id="ecwid-cart-anchor" class="ecwid-cart-anchor" aria-live="polite">
    <p id="cart-feedback" class="cart-feedback" hidden role="status"></p>
  </div>

  <section class="section section--compact-top" aria-labelledby="shop-heading">
    <div class="container">
      <h2 id="shop-heading" class="visually-hidden">Products</h2>
      <div id="shop-grid" class="shop-grid" aria-live="polite"></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

