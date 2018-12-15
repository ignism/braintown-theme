<?php
/* Template Name: Project */

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$templates = array( 'posts/project.twig' );

Timber::render( $templates, $context);