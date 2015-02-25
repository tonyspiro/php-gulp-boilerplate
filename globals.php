<?php

/* !!!! DO NOT EDIT !!!! Configure in config.json !!!!
====================================================  */
$config = json_decode(file_get_contents('config.json'));

define('ENV', $config->env);

// Error reporting
if(ENV == "development"){
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
}

// CSS dev files
$GLOBALS['DEV_CSS_FILES'] = $config->output->dev->css;

// JS dev head files
$GLOBALS['DEV_JS_HEAD_FILES'] = $config->output->dev->js_head;

// JS dev foot files
$GLOBALS['DEV_JS_FOOT_FILES'] = $config->output->dev->js_foot;

// CSS prod files
$GLOBALS['PROD_CSS_FILES'] = $config->output->prod->css;

// JS prod head files
$GLOBALS['PROD_JS_HEAD_FILES'] = $config->output->prod->js_head;

// JS prod foot files
$GLOBALS['PROD_JS_FOOT_FILES'] = $config->output->prod->js_foot;