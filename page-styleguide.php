<?php
/* Template Name: Styleguide */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$templates = array( 'pages/styleguide.twig' );

Timber::render( $templates, $context);