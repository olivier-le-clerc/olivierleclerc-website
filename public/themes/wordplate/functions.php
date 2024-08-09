<?php

require __DIR__ . '/wordplate-config.php';

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/c7d1f21538.js');
    //flickity
    wp_enqueue_script('flickity', "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
    wp_enqueue_style('flickity', 'https://unpkg.com/flickity@2/dist/flickity.min.css');
});

// displays all items for the porfolio
add_filter('pre_get_posts', function (WP_Query $wp_query) {
    if (isset($wp_query->query_vars['post_type']) && $wp_query->query_vars['post_type'] != 'portfolio') return;
    $wp_query->query_vars['posts_per_page'] = -1;
});

// add custom query vars

add_filter('query_vars', function ($qvars) {
    $qvars[] = 'item';
    return $qvars;
});

// make portfolio the home page
add_action('pre_get_posts', function ($wp_query) {
    // Ensure this filter isn't applied to the admin area
    if (is_admin()) {
        return;
    }

    // Run if the home page is set to a static page
    $page_id = $wp_query->get('page_id');

    // $page_id=(pll_get_post($page_id,'fr'));

    if ($page_id == get_option('page_on_front')) {
        $wp_query->set('post_type', 'portfolio');
        $wp_query->set('page_id', ''); //Empty

        // Set properties that describe the page to reflect that we aren't really displaying a static page
        $wp_query->is_page = 0;
        $wp_query->is_singular = 0;
        $wp_query->is_post_type_archive = 1;
        $wp_query->is_archive = 1;

        // Set pagination
        $paged = !empty(get_query_var('page')) ? get_query_var('page') : 1;
        $wp_query->set('paged', $paged);
    }
});


// add_filter( 'wp_lazy_loading_enabled', '__return_false' );

//disable block editor
add_filter('use_block_editor_for_post', '__return_false');

function get_portfolio_item_classes($post_id)
{
    $terms = wp_get_post_terms($post_id, 'portfolio-taxonomy', [
        'fields' => 'name'
    ]);
    var_dump($terms);
    die();
    return implode(' ', $terms);
}

function get_portfolio_images(WP_Post $post = null)
{

    $post = get_post($post);

    if (function_exists('pll_get_post')) {
        $post = get_post(pll_get_post($post->ID, 'fr'));
    }

    $res = [];
    preg_match_all('/<img.*?>/', $post->post_content, $res);
    return $res[0];
}

function remove_images($str)
{
    return preg_replace('/<img.*?>/', '', $str);
}
