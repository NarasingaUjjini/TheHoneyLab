<?php
if (!defined('ABSPATH')) {
    exit;
}

if (is_front_page()) {
    include get_theme_file_path('front-page.php');
    return;
}

include get_theme_file_path('page.php');

