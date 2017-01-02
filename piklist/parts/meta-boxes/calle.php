
<?php
/*
Title: Relate
Post Type: page
Flow:Calle y Palco
Tab: Calle
 */
piklist(
    'field',
    array(
        'type' => 'select',
        'scope' => 'post_meta',
        'field' => 'your field name',
        'label' => __('your label'),
        'description' => __('your desc'),
        'attributes' => array(
            'class' => 'css class',
            'multiple' => 'multiple'
        ),
        'choices' => piklist(
            get_posts(
                array(
                    'post_type' => 'artist',
                    'hide_empty' => false
                )
            ),
            array(
                'ID',
                'post_title'
            )
        )
    )
);
?>
