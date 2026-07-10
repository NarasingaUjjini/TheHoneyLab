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
      <p class="label label--moss">Process</p>
      <h1 class="page-hero__title">From bloom to jar</h1>
      <p class="page-hero__lead">How a batch gets from the field to your table.</p>
      <hr class="rule-botanical page-hero__rule" />
    </div>
  </div>

  <div class="section">
    <div class="container container--narrow process-content">
      <section class="process-block" aria-labelledby="sustainability-heading">
        <h2 id="sustainability-heading" class="process-block__title">Sustainability</h2>
        <div class="prose">
          <p>
            Placeholder: how we care for the bees, the land, and the places we set hives.
          </p>
          <p>
            Placeholder: what we leave alone, what we reuse, and how we try not to take more than a yard can give.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="forage-heading">
        <h2 id="forage-heading" class="process-block__title">Bees forage</h2>
        <div class="prose">
          <p>
            Our hives travel with the bloom. Orange groves in spring, alfalfa through summer,
            wild hills when the rain was decent. We'd rather move the hives than leave them in one spot all year.
          </p>
          <p>
            California's big enough that the honey changes depending on where the bees were.
            We put that on every label.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="harvest-heading">
        <h2 id="harvest-heading" class="process-block__title">We harvest</h2>
        <div class="prose">
          <p>
            A frame is ready when the bees have capped the cells. That means the moisture content
            is low enough to keep. We check each frame by hand instead of pulling a whole super
            because the calendar says so.
          </p>
          <p>
            If a hive looks light, we leave the honey and come back later.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="extract-heading">
        <h2 id="extract-heading" class="process-block__title">Extract &amp; strain</h2>
        <div class="prose">
          <p>
            Frames are spun slow in our extractor at the table in El Cajon. We strain once to
            remove wax bits and nothing more. The honey is raw and unfiltered, the way we have
            always done it.
          </p>
          <p>
            We do not heat past what is needed to move it through the strainer. Overheating
            flattens the flavor and we are not interested in that.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="jar-heading">
        <h2 id="jar-heading" class="process-block__title">Jar, label &amp; taste</h2>
        <div class="prose">
          <p>
            Every batch gets a number, a harvest date, and a note about where the bees were.
            We taste side by side before anything leaves the house. Grandpa still signs off on
            each one.
          </p>
          <p>
            This is what we mean by the lab. Not a chemistry set. Just the table, jars lined up,
            a pen, and notes.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="bees-heading">
        <h2 id="bees-heading" class="process-block__title">Bees &amp; land</h2>
        <div class="prose">
          <p>
            We move with the seasons and try not to overwork a yard. When varroa or drought hits a colony hard,
            honey can wait.
          </p>
        </div>
      </section>

      <section class="process-block" aria-labelledby="dont-heading">
        <h2 id="dont-heading" class="process-block__title">What we do not do</h2>
        <ul class="process-dont-list">
          <li>Blend honeys from different sources to hide where they came from</li>
          <li>Over-filter or over-heat to make every batch look the same</li>
          <li>Pull frames before the bees have finished capping them</li>
          <li>Rush a harvest because demand picked up</li>
        </ul>
      </section>

      <section class="process-block" aria-labelledby="next-heading">
        <h2 id="next-heading" class="process-block__title">What's next</h2>
        <div class="prose">
          <p>
            Beeswax from the same hives. Candles first, then balms and salves. Rendered slow,
            poured by hand, tracked the same way as the honey.
          </p>
        </div>
      </section>

      <div class="about-actions">
        <a class="btn btn--primary" href="<?php echo esc_url(thl_get_page_url('products')); ?>">Shop honey</a>
        <a class="btn btn--secondary" href="<?php echo esc_url(thl_get_page_url('home')); ?>">Back home</a>
      </div>
    </div>
  </div>
</main>
<?php get_footer(); ?>

