<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package voilarts
 */

?>

	</div><!-- #content -->

	<footer class="site-footer">
		<div class="wrap">
      <h2>FOOTER</h2>
			<div class="site-info">
				<?php //echo wp_kses_post( wds_voilarts_get_copyright_text() ); ?>
			</div>

		</div><!-- .wrap -->
	</footer><!-- .site-footer -->
</div><!-- #page -->
</div><!--.wrapper-vv-->

<?php //echo wp_kses_post( wds_voilarts_get_mobile_navigation_menu() ); ?>

<?php wp_footer(); ?>

</body>
</html>
