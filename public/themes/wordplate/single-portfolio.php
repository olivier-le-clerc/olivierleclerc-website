<?php get_header(); ?>

<main>
    <div class="container">
        <?php if (have_posts()) : the_post(); ?>

            <div class="single-item">
                <?php $images = get_portfolio_images() ?>

                <div class="item-description grid-description">
                    <h1><?php the_title(); ?></h1>
                    <p>
                        <?= remove_images(get_the_content()) ?>

                    </p>
                </div>

                <div class="grid-image">
                    <div id="carousel" class="carousel">
                        <?php foreach (get_portfolio_images() as $image) : ?>
                            <div class="carousel-cell">
                                <?= $image ?>
                            </div>
                        <?php endforeach ?>
                    </div>
                </div>


            </div>
        <?php else : ?>
            <article>
                <p>Nothing to see.</p>
            </article>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
