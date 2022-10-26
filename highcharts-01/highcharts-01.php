<?php
/**
 * Plugin Name: Highcharts 01
 * Description: Highcharts
 * Author: klusw
 * version: 1.0.0
 * Text Domain: simple-contact-form
 */



if( ! defined('ABSPATH')){
    echo "bye";
    exit;
}

function highcharts01_script_register()
{
    wp_enqueue_script('highcharts-custom-block', plugin_dir_url(__FILE__).'highcharts-block.js',array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false);
}

add_action('enqueue_block_editor_assets', 'highcharts01_script_register');

?>