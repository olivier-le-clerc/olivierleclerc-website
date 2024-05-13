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
            <ul class="social icon-group menu">
                <li class="menu-item"><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                <li class="menu-item"><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                <li class="menu-item"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
            <div class="branding">
                <a href="<?= home_url() ?>">
                    <h1>Olivier Le Clerc</h1>
                </a>
            </div>
            <ul class="toolbar menu langage-select">
                <!-- <li class="menu-item"> -->
                <?php if (function_exists('pll_the_languages')) {
                    pll_the_languages([
                        'hide_current' => 1,
                        'force_home' => 1,
                    ]);
                } ?>
                <!-- </li> -->
            </ul>
            <nav role="navigation">
                <?php wp_nav_menu(['theme_location' => 'navigation']); ?>
            </nav>
        </div>
    </header>
