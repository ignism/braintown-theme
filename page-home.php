<?php
/* Template Name: Home */

$args = array(
    'post_type' => 'project'
);

$context = Timber::get_context();
$context['post'] = Timber::get_post();
$context['projects'] = Timber::get_posts($args);
$context['phone'] = '+31 (0)40 - 240 0 240';
$context['mail'] = 'info@braintown.nl';
$templates = array( 'pages/home.twig' );

Timber::render( $templates, $context);