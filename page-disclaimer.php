<?php
/* Template Name: Disclaimer */

$context = Timber::get_context();
$context['post'] = Timber::get_post();
$templates = array( 'pages/disclaimer.twig' );

Timber::render( $templates, $context);