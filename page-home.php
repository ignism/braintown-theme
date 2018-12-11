<?php
/* Template Name: Home */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$templates = array( 'pages/home.twig' );

Timber::render( $templates, $context);