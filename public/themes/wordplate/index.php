<?php get_header(); ?>

<main>
<div class="container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <header>
                    <h1><?php the_title(); ?></h1>
                </header>

                <?php the_content(); ?>
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
