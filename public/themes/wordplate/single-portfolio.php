<?php get_header(); ?>

<main>
    <div class="container">
        <?php if (have_posts()) : the_post(); ?>

            <div class="single-item">
                <?php $images = get_portfolio_images() ?>

                <h1 class="mobile-only"><?php the_title(); ?></h1>

                <div class="grid-image">
                    <?php foreach (get_portfolio_images() as $image) : ?>
                        <div class="carousel-cell">
                            <?= $image ?>
                        </div>
                    <?php endforeach ?>
                </div>

                <div class="item-description grid-description">
                    <h1 class="desktop-only"><?php the_title(); ?></h1>
                    <p>
                        <?= remove_images(get_the_content()) ?>
                    </p>
                </div>


            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
