<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

/* public my_add_show_title() {{{ */
/**
 * Add a show title field below post or page title.
 * my_add_show_title
 *
 * @access public
 * @return void
 */
function my_add_show_title() {
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'show_title_voil'
    ,'template' => 'field' // format the field without a label
    ,'attributes' => array(
      'class' => 'large-text'
      ,'placeholder' => 'Enter show title here'
    )
  ));
}
/* }}} */
add_action('edit_form_after_title', 'my_add_show_title');

// add image for artist parent page
add_image_size('parent-artist-list',320,200, true);
function child_scripts_menu (){
    wp_dequeue_script('voilarts-scripts');
    wp_enqueue_script('child_scripts', get_stylesheet_directory_uri() . '/assets/scripts/project.min.js', array('jquery'), true);
}
add_action('wp_print_scripts', 'child_scripts_menu', 100);
add_filter('show_admin_bar', '__return_false');

?>
