<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package voilarts
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href="https://fonts.googleapis.com/css?family=Raleway:300i,400,700|Source+Sans+Pro" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div class="wrapper-vv">
<header class="optional">
<div class="fleche" id="trigger">
	<?php pll_the_languages();?>
	<p class="trigger"><span></span></p>
</div>
</header>
<div class="off-canv-menu">
	<?php get_template_part('templates/menu'); ?>
</div>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'voilarts' ); ?></a>

	<header class="site-header">
		<div class="wrap">

			<div class="site-branding">
				<?php if ( is_front_page() && is_home() ) : ?>
					<?php wd_slider(1); ?>
				<?php else : ?>
				<?php endif;

				$description = get_bloginfo( 'description', 'display' ); ?>
				<?php if ( $description || is_customize_preview() ) : ?>
					<p class="site-description"><?php echo $description; // WPCS: xss ok. ?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation">
				<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'menu_id'        => 'primary-menu',
						'menu_class'     => 'menu dropdown',
					) );
				?>
			</nav><!-- #site-navigation -->

		</div><!-- .wrap -->
	</header><!-- .site-header -->

	<div id="content" class="site-content">
