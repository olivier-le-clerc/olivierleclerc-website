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
                    <button id="navmenu-toggle" class="burger-menu icon-wrapper" onclick="document.querySelector('nav').classList.toggle('is-open')">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div class="desktop-only">
                    <ul class="item-list">
                        <li class="icon-wrapper"><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                        <li class="icon-wrapper"><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                        <li class="icon-wrapper"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
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
                        ]);
                    } ?>
                </ul>
            </div>

            <nav role="navigation">
                <?php wp_nav_menu(['theme_location' => 'navigation']); ?>
            </nav>

        </div>
    </header>
