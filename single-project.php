<?php
$context = Timber::get_context();
// $args = array(
// 'post_type' => 'project',
// 'posts_per_page' => -1,
// 'orderby' => array(
//     'date' => 'DESC'
// ));
$context['post'] = Timber::get_post();
$context['phone'] = '+31 (0)40 - 240 0 240';
$context['mail'] = 'info@braintown.nl';
Timber::render( 'posts/project.twig', $context );