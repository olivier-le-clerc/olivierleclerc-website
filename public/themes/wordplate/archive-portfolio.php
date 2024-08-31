<?php get_header(); ?>

<main>
    <div class="container">

        <div class="portfolio-filters desktop-only">
            <button data-filter="*">
                Tous
            </button>
            <?php foreach (
                get_terms(
                    [
                        'taxonomy' => 'portfolio-taxonomy',
                        'hide_empty' => true
                    ]
                ) as $term
            ) : ?>

                <button data-filter=".portfolio-taxonomy-<?= $term->slug ?>">
                    <?= $term->name ?>
                </button>

            <?php endforeach ?>
        </div>

        <div class="portfolio-filters mobile-only">
            <select id="filters-select-dropdown" name="filters-select-dropdown" class="filters-select-dropdown">
                <option value="*">Filtrer</option>
                <?php foreach (
                    get_terms(
                        [
                            'taxonomy' => 'portfolio-taxonomy',
                            'hide_empty' => true
                        ]
                    ) as $term
                ) : ?>

                    <option value=".portfolio-taxonomy-<?= $term->slug ?>">
                        <?= $term->name ?>
                        </option>

                <?php endforeach ?>

            </select>
        </div>

        <div class="gallery">
            <?php while (have_posts()) : the_post(); ?>
                <div <?= post_class() ?>>
                    <div class="portfolio-wrapper">
                        <a href="<?php the_permalink() ?>">
                            <?php the_post_thumbnail('thumb', ['data-post-id' => get_the_ID()]) ?>
                        </a>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
</main>

<div class="lightbox is-hidden">

    <portfolio-item></portfolio-item>

</div>

<?php get_footer(); ?>
