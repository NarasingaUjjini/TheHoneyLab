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
      <p class="label label--moss">Page</p>
      <h1 class="page-hero__title"><?php the_title(); ?></h1>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>
  <section class="section">
    <div class="container container--narrow prose prose--spaced">
      <?php
      while (have_posts()) :
          the_post();
          the_content();
      endwhile;
      ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>

