<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package _s
 */

get_header(); ?>


		<div class="primary content-area">
			<main id="main" class="site-main" role="main">


      <?php
      $args = array(
          'post_type'      => 'artist',
          'posts_per_page' => -1,
          'post_parent'    => $post->ID,
          'order'          => 'ASC',
          'orderby'        => 'menu_order'
       );
      $parent = new WP_Query( $args );
      if ( $parent->have_posts() ) : ?>
        <div class="feat-image"><?php  the_post_thumbnail(); ?></div>
        <div class="wrap">
        <div class="titles-voil">
                <h1 class="title-voil"><?php echo get_the_title($post->post_parent); ?></h1>
                <p>
                    <span class="show-title-voil"><?php //echo $invo; ?></span>
                </p>
            </div>

<div class="content-voil">
				<?php //the_content(); ?>

    <div class="scenario-list">
    <?php while ( $parent->have_posts() ) : $parent->the_post(); ?>

        <div id="parent-<?php the_ID(); ?>" class="parent-page">
            <?php the_post_thumbnail('parent-artist-list'); // Fullsize image for the single post ?>
			<!-- article -->
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
            <h1><?php the_title(); ?></h1>
            </a>
            <?php //the_excerpt(); ?>

        </div>

    <?php endwhile; ?>

<?php endif; wp_reset_query(); ?>
</div>
<?php
				// get_template_part( 'template-parts/content', get_post_format() );

				//the_post_navigation();

				// If comments are open or we have at least one comment, load up the comment template.
				// if ( comments_open() || get_comments_number() ) :
				// 	comments_template();
				// endif;

			//endwhile; // End of the loop.
			?>

			</main><!-- #main -->
		</div><!-- .primary -->

		<?php //get_sidebar(); ?>

	</div><!-- .wrap -->

<?php get_footer(); ?>
