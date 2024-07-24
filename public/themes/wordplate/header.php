<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>
</head>

<body <?php body_class('layout'); ?>>
    <?php wp_body_open(); ?>

    <header class="site-header">

        <div class="container header-grid">

            <div class="toolbar-left">

                <div class="mobile-only item-list">
                    <button role="navmenu-toggle" class="burger-menu icon-wrapper">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div class="desktop-only">
                    <?php get_template_part('parts/social-media') ?>
                </div>
            </div>

            <div class="branding">
                <a href="<?= home_url() ?>">
                    <h1>Olivier Le Clerc</h1>
                </a>
            </div>

            <div class="toolbar-right">
                <ul class="langage-select item-list">
                    <?php if (function_exists('pll_the_languages')) {
                        pll_the_languages([
                            'hide_current' => 1,
                            'force_home' => 1,
                            'display_names_as' => 'slug'
                        ]);
                    } ?>
                </ul>
            </div>

            <nav id="main-navmenu" role="navigation">
                <div class="mobile-navbar-header mobile-only">
                    <div class="mobile-only item-list">
                        <button role="navmenu-toggle" class="burger-menu icon-wrapper">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <?php wp_nav_menu(['theme_location' => 'navigation']); ?>
                <div class="mobile-navbar-footer mobile-only">
                    <?php get_template_part('parts/social-media') ?>
                </div>
            </nav>

        </div>
    </header>
