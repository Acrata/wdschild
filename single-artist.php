<?php
if( $post->post_parent !== 0 ) {
    get_template_part('templates/artist', 'child');
} else {
    get_template_part('templates/artist');
}?>
