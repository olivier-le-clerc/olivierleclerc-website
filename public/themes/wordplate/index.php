<?php get_header(); ?>

<main>
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <section <?php post_class('title-is-' . strtolower(get_the_title())) ?>>
                        <header>
                            <h2><?php the_title(); ?></h2>
                        </header>

                    <?php the_post_thumbnail() ?>

                    <?php the_content(); ?>
                </section>
            <?php endwhile; ?>
        <?php else : ?>
            <section>
                <p>Nothing to see.</p>
            </section>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
