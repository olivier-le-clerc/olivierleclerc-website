<?php get_header(); ?>

<main>
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <article>
                    <header>
                        <h1><?php the_title(); ?></h1>
                    </header>

                    <div class="carousel-container">
                        <div class="carousel" data-flickity='{ "imagesLoaded": true}'>


                            <?php foreach (get_portfolio_images() as $image) : ?>
                                <!-- <div class="carousel-cell"> -->
                                <?= $image ?>

                                <!-- </div>s -->

                            <?php endforeach ?>

                        </div>
                    </div>

                    <?= remove_images(get_the_content()) ?>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <article>
                <p>Nothing to see.</p>
            </article>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
