<?php
if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#FAF6EE" />
    <script>
      (function () {
        try {
          var t = localStorage.getItem("hl-theme") || "paper";
          document.documentElement.setAttribute("data-theme", t);
        } catch (e) {
          document.documentElement.setAttribute("data-theme", "paper");
        }
      })();
    </script>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); thl_body_data_page_attr(); ?>>
    <?php wp_body_open(); ?>
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="site-header" id="top">
      <div class="container site-header__inner">
        <a class="site-logo" href="<?php echo esc_url(thl_get_page_url('home')); ?>">The Honey Lab</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
          <span class="nav-toggle__bar" aria-hidden="true"></span>
          <span class="nav-toggle__bar" aria-hidden="true"></span>
          <span class="nav-toggle__bar" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Main">
          <ul class="site-nav__list">
            <li><a href="<?php echo esc_url(thl_get_page_url('about')); ?>" data-nav="about">About</a></li>
            <li><a href="<?php echo esc_url(thl_get_page_url('honey')); ?>" data-nav="honey">Honey</a></li>
            <li><a href="<?php echo esc_url(thl_get_page_url('products')); ?>" data-nav="products">Shop</a></li>
            <li><a href="<?php echo esc_url(thl_get_page_url('process')); ?>" data-nav="process">Process</a></li>
            <li><a href="<?php echo esc_url(thl_get_page_url('contact')); ?>" data-nav="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

