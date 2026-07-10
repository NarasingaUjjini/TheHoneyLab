<?php
/**
 * Theme functions for The Honey Lab.
 */

if (!defined('ABSPATH')) {
    exit;
}

function thl_get_page_url($slug) {
    if ($slug === 'home') {
        return home_url('/');
    }

    $page = get_page_by_path($slug);
    if ($page instanceof WP_Post) {
        return get_permalink($page);
    }

    return home_url('/' . $slug . '/');
}

function thl_current_data_page() {
    if (is_front_page()) {
        return 'home';
    }
    if (is_page('about')) {
        return 'about';
    }
    if (is_page('honey')) {
        return 'honey';
    }
    if (is_page('products') || is_page('shop')) {
        return 'products';
    }
    if (is_page('process')) {
        return 'process';
    }
    if (is_page('contact')) {
        return 'contact';
    }

    return '';
}

function thl_body_data_page_attr() {
    $page = thl_current_data_page();
    if ($page !== '') {
        echo ' data-page="' . esc_attr($page) . '"';
    }
}

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
});

add_action('wp_enqueue_scripts', function () {
    $theme_uri = get_stylesheet_directory_uri();
    $theme_ver = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'thl-google-fonts',
        'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Figtree:wght@400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500&family=Karla:wght@400;500;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Source+Sans+3:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Work+Sans:wght@400;500;600&display=swap',
        [],
        null
    );

    wp_enqueue_style('thl-styles', $theme_uri . '/public/css/styles.css', ['thl-google-fonts'], $theme_ver);
    wp_enqueue_style('thl-themes', $theme_uri . '/public/css/themes.css', ['thl-styles'], $theme_ver);

    wp_enqueue_script('thl-products', $theme_uri . '/public/js/products.js', [], $theme_ver, true);
    wp_enqueue_script('thl-featured', $theme_uri . '/public/js/featured.js', ['thl-products'], $theme_ver, true);
    wp_enqueue_script('thl-catalog', $theme_uri . '/public/js/catalog.js', ['thl-products'], $theme_ver, true);
    wp_enqueue_script('thl-ecwid-config', $theme_uri . '/public/js/ecwid-config.js', [], $theme_ver, true);
    wp_enqueue_script('thl-ecwid-cart', $theme_uri . '/public/js/ecwid-cart.js', ['thl-products', 'thl-ecwid-config'], $theme_ver, true);
    wp_enqueue_script('thl-products-purchase', $theme_uri . '/public/js/products-purchase.js', ['thl-products', 'thl-ecwid-cart'], $theme_ver, true);
    wp_enqueue_script('thl-main', $theme_uri . '/public/js/main.js', [], $theme_ver, true);
    wp_enqueue_script('thl-theme-picker', $theme_uri . '/public/js/theme-picker.js', [], $theme_ver, true);
});

