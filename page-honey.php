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
      <p class="label label--moss">Honey</p>
      <h1 class="page-hero__title">Batch catalog</h1>
      <p class="page-hero__lead">What came out of the hives, batch by batch.</p>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>

  <section class="section" id="individuality" aria-labelledby="individuality-heading">
    <div class="container container--narrow">
      <header class="section-header">
        <h2 id="individuality-heading" class="section-header__title">One harvest per jar</h2>
        <hr class="rule-botanical section-header__rule" />
      </header>
      <div class="prose prose--spaced">
        <p>
          We don't sell one mixed-up honey. Each jar is one harvest with a batch number on it.
          Orange Blossom Batch 01 means the bees were on orange trees in a certain field at a certain time.
          Alfalfa Batch 02 is something else.
        </p>
        <p>
          The label says where they foraged and when we pulled the frame. We write tasting notes because
          batches don't all taste the same. Some run sweeter, some bite a little more at the end.
        </p>
        <p>
          Ten batches from around California. 8 or 12 oz jars. Prices are placeholders until the shop is live.
        </p>
      </div>
    </div>
  </section>

  <section class="section section--kraft" id="catalog" aria-labelledby="catalog-heading">
    <div class="container">
      <header class="section-header">
        <h2 id="catalog-heading" class="section-header__title">Current batches</h2>
        <hr class="rule-botanical section-header__rule" />
      </header>
      <div id="honey-catalog" class="honey-catalog" aria-live="polite"></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

