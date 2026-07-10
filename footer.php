<?php
if (!defined('ABSPATH')) {
    exit;
}

$show_footer_tagline = !empty($GLOBALS['thl_show_footer_tagline']);
?>
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__grid">
          <div>
            <p class="site-footer__brand">The Honey Lab</p>
            <address class="site-footer__address">El Cajon, California</address>
            <?php if ($show_footer_tagline) : ?>
              <p class="site-footer__tagline">Family honey from El Cajon.</p>
            <?php endif; ?>
          </div>
          <div>
            <p class="label site-footer__heading">Contact</p>
            <ul class="site-footer__list">
              <li><a href="mailto:hello@thehoneylab.com">hello@thehoneylab.com</a></li>
              <li><a href="tel:+16195550100">(619) 555-0100</a></li>
            </ul>
          </div>
          <div>
            <p class="label site-footer__heading">Follow</p>
            <ul class="site-footer__list site-footer__list--social">
              <li><a href="https://instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
              <li><a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">Facebook</a></li>
            </ul>
          </div>
        </div>
        <hr class="rule-botanical site-footer__rule" />
        <nav class="site-footer__nav" aria-label="Footer">
          <a href="<?php echo esc_url(thl_get_page_url('home')); ?>">Home</a>
          <a href="<?php echo esc_url(thl_get_page_url('about')); ?>">About</a>
          <a href="<?php echo esc_url(thl_get_page_url('honey')); ?>">Honey</a>
          <a href="<?php echo esc_url(thl_get_page_url('products')); ?>">Shop</a>
          <a href="<?php echo esc_url(thl_get_page_url('process')); ?>">Process</a>
          <a href="<?php echo esc_url(thl_get_page_url('contact')); ?>">Contact</a>
        </nav>
        <p class="site-footer__copy">&copy; <span id="year"></span> The Honey Lab</p>
      </div>
    </footer>
    <?php wp_footer(); ?>
  </body>
</html>

