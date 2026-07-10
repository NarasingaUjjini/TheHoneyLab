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
      <p class="label label--moss">Contact</p>
      <h1 class="page-hero__title">Get in touch</h1>
      <p class="page-hero__lead">Questions? We answer. Usually within a day.</p>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>

  <div class="section">
    <div class="container contact-layout">
      <div class="contact-info">
        <ul class="contact-details">
          <li>
            <p class="label">Email</p>
            <a href="mailto:hello@thehoneylab.com">hello@thehoneylab.com</a>
          </li>
          <li>
            <p class="label">Phone</p>
            <a href="tel:+16195550100">(619) 555-0100</a>
          </li>
          <li>
            <p class="label">Location</p>
            <p>El Cajon, California</p>
          </li>
        </ul>

        <p class="contact-note">
          <strong>To order now:</strong> email or call, or use the <a href="<?php echo esc_url(thl_get_page_url('products')); ?>">shop page</a>.
        </p>

        <div class="contact-social">
          <p class="label">Follow</p>
          <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a>
          <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">Facebook</a>
        </div>
      </div>

      <div class="contact-form-wrap">
        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-field">
            <label class="label" for="contact-name">Name</label>
            <input class="input" type="text" id="contact-name" name="name" required autocomplete="name" />
          </div>
          <div class="form-field">
            <label class="label" for="contact-email">Email</label>
            <input class="input" type="email" id="contact-email" name="email" required autocomplete="email" />
          </div>
          <div class="form-field">
            <label class="label" for="contact-interest">I&rsquo;m interested in</label>
            <select class="input" id="contact-interest" name="interest">
              <option>Honey</option>
              <option>Wholesale</option>
              <option>Beeswax</option>
              <option>Skincare</option>
              <option>General question</option>
            </select>
          </div>
          <div class="form-field">
            <label class="label" for="contact-message">Message</label>
            <textarea class="input input--area" id="contact-message" name="message" rows="5" required></textarea>
          </div>
          <button class="btn btn--primary" type="submit">Send message</button>
        </form>
        <p class="contact-success" id="contact-success" hidden role="status">
          Message sent. We&rsquo;ll get back to you soon.
        </p>
      </div>
    </div>
  </div>

  <section class="section section--store" aria-labelledby="store-heading">
    <div class="container container--narrow">
      <header class="section-header section-header--center">
        <h2 id="store-heading" class="section-header__title">Shop</h2>
        <p class="section-header__subtitle">
          Pickup in El Cajon. Shipping around California soon.
        </p>
      </header>
      <div id="store" class="store-embed">
        <p class="store-embed__placeholder">
          Order on the <a href="<?php echo esc_url(thl_get_page_url('products')); ?>">shop page</a>.
          Or leave your email below.
        </p>
      </div>
    </div>
  </section>

  <section class="section section--signup" aria-labelledby="signup-heading">
    <div class="container container--narrow">
      <header class="section-header section-header--center">
        <h2 id="signup-heading" class="section-header__title">New batch alerts</h2>
        <p class="section-header__subtitle">
          We only email when something new is ready. No spam.
        </p>
      </header>
      <form class="signup-form" novalidate>
        <label class="visually-hidden" for="email-contact">Email address</label>
        <input class="input" type="email" id="email-contact" name="email" placeholder="Your email" required autocomplete="email" />
        <button class="btn btn--primary" type="submit">Notify me</button>
      </form>
      <p class="signup-success" hidden role="status">You&rsquo;re on the list.</p>
    </div>
  </section>
</main>
<?php get_footer(); ?>

