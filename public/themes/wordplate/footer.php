<?php wp_footer();
$page_legal = get_posts([
    'post_type' => 'page',
    'title' => 'legal',
    'numberposts' => 1,
    'fields'=>'ids'
]);
$legal_url = empty($page_legal) ? '' : get_permalink($page_legal[0]);
?>

<footer>
    <div class="footer-content container">
        <div class="copyright">
            <a href="<?= $legal_url ?>">
                © 2024 Olivier Le Clerc
            </a>
        </div>
        <div class="social">
            <?php get_template_part('parts/social-media') ?>
        </div>
    </div>
</footer>
</body>

</html>
