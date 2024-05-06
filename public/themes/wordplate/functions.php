<?php

require __DIR__ . '/wordplate-config.php';

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/c7d1f21538.js');

});

add_action('init', function () {

    register_post_type('portfolio-item', [
        'label' => 'Portfolio',
        'public' => true,
        'show_in_rest' => true,
        'has_archive' => true,
        'supports' => [
            'thumbnail', 'title', 'editor'
        ],
    ]);

    register_taxonomy('portfolio-taxonomy', 'portfolio-item', [
        'public' => true,
        'labels' => [
            'name' => 'Catégories'
        ],
        'show_in_rest' => true,
        'show_admin_column' => true
    ]);
});

add_filter('manage_portfolio-item_posts_columns', function ($columns) {
    return [
        "cb" => array_shift($columns),
        'thumbnail' => 'Miniature',
        ...$columns
    ];
});

add_action('manage_portfolio-item_posts_custom_column', function ($column_key, $post_id) {
    if ($column_key == 'thumbnail') {
        echo get_the_post_thumbnail($post_id, [80, 80]);
    }
}, 10, 2);

add_action('admin_head', function () {
    echo '<style>.column-thumbnail{width:90px;}</style>';
}, 10, 0);

add_filter('use_block_editor_for_post', function (bool $use_block_editor, WP_Post $post) {
    return $post->post_type === 'portfolio-item' ? false : $use_block_editor;
}, 10, 2);

add_action('save_post_portfolio-item', function (int $post_id, WP_Post $post) {

    $images_in_post_ids = get_images_id_from_content($post);
    $attached_media_ids = array_map(fn (WP_Post $e) => $e->ID, get_attached_media('image', $post_id));

    $attachments_to_remove = array_diff($attached_media_ids, $images_in_post_ids);
    $attachments_to_add = array_diff($images_in_post_ids, $attached_media_ids);

    foreach ($attachments_to_remove as $id) {
        wp_update_post(['ID' => $id, 'post_parent' => 0]);
    }

    foreach ($attachments_to_add as $id) {
        wp_update_post(['ID' => $id, 'post_parent' => $post_id]);
    }
}, 10, 2);

function get_images_id_from_content(WP_Post $post)
{
    $result = [];
    preg_match_all('/wp-image-([0-9]+)/', $post->post_content, $result, PREG_PATTERN_ORDER);
    $result = $result[1];
    $thumbnail_id = get_post_thumbnail_id($post);
    if (!in_array($thumbnail_id, $result)) {
        $result[] = $thumbnail_id;
    }
    return $result;
}
function get_portfolio_item_classes($post_id)
{
    $terms = wp_get_post_terms($post_id,'portfolio-taxonomy',[
        'fields' => 'name'
    ]);
    var_dump($terms);die();
    return implode(' ', $terms);
}
