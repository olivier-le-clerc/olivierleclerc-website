<?php get_header(); ?>

<main>
    <div class="container">
        <div class="portfolio-filters">
            <button data-filter="*">
                All
            </button>
            <?php foreach (get_terms(
                [
                    'taxonomy' => 'portfolio-taxonomy',
                    'hide_empty' => true
                ]
            ) as $term) : ?>

                <button data-filter=".portfolio-taxonomy-<?= $term->slug ?>">
                    <?= $term->name ?>
                </button>

            <?php endforeach ?>
        </div>

        <div class="gallery">
            <?php while (have_posts()) : the_post(); ?>
                <div <?= post_class() ?>>
                    <div class="portfolio-wrapper">
                        <a href="<?php the_permalink() ?>">
                        <?php the_post_thumbnail('thumb') ?></a>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
