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
      <p class="label label--moss">About</p>
      <h1 class="page-hero__title">Our story</h1>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>

  <div class="section">
    <div class="container container--narrow about-content">
      <figure class="story-figure">
        <div class="img-placeholder" role="img" aria-label="Grandfather and grandson — photo coming soon">
          <span class="img-placeholder__text">Family photo</span>
        </div>
        <figcaption class="story-figure__caption">Grandfather &amp; grandson photo</figcaption>
      </figure>

      <div class="placeholder-block" aria-hidden="true">
        <p class="placeholder-block__text">Section placeholder</p>
      </div>
      <div class="placeholder-block" aria-hidden="true">
        <p class="placeholder-block__text">Section placeholder</p>
      </div>
      <div class="placeholder-block" aria-hidden="true">
        <p class="placeholder-block__text">Section placeholder</p>
      </div>

      <div class="about-actions">
        <a class="btn btn--primary" href="<?php echo esc_url(thl_get_page_url('honey')); ?>">See what we make</a>
        <a class="btn btn--secondary" href="<?php echo esc_url(thl_get_page_url('process')); ?>">How we work</a>
      </div>
    </div>
  </div>
</main>
<?php get_footer(); ?>

