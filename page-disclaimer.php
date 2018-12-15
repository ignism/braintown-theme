<?php
/* Template Name: Disclaimer */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$templates = array( 'pages/disclaimer.twig' );

Timber::render( $templates, $context);