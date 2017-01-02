<?php
/*
Title: Info Show
Post Type: page , artist
Context: side
 */


  piklist('field', array(
    'type' => 'text'
    ,'field' => 'duration_data_voil'
    ,'label' => __('Duracion', 'html5blank')
    ,'attributes' => array(
        'class' => 'show-text'
    )
  ));
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'public_data_voil'
    ,'label' => __('Publico', 'html5blank')
    ,'help' => __('You can easily add tooltips to your fields with the help parameter.', 'html5blank')
    ,'attributes' => array(
        'class' => 'show-text'
    )
  ));
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'from_data_voil'
    ,'label' => __('Procedencia', 'html5blank')
    ,'help' => __('You can easily add tooltips to your fields with the help parameter.', 'html5blank')
    ,'attributes' => array(
        'class' => 'show-text'
    )
  ));
  piklist('field', array(
    'type' => 'text'
    ,'field' => 'space_data_voil'
    ,'label' => __('Espacio', 'html5blank')
    ,'help' => __('You can easily add tooltips to your fields with the help parameter.', 'html5blank')
    ,'attributes' => array(
        'class' => 'show-text'
    )
  ));
?>
