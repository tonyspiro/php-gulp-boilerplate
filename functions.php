<?php

/* Configure!
================================ */

function head_files(){

	if(ENV=="development"){
    foreach($GLOBALS['DEV_CSS_FILES'] as $dev_css_path){
      ?>
      <link rel="stylesheet" href="<?php echo $dev_css_path; ?>">
      <?php
    }
    foreach($GLOBALS['DEV_JS_HEAD_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }

  if(ENV=="production"){
    foreach($GLOBALS['PROD_CSS_FILES'] as $dev_css_path){
      ?>
      <link rel="stylesheet" href="<?php echo $dev_css_path; ?>">
      <?php
    }
    foreach($GLOBALS['PROD_JS_HEAD_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }
}

function foot_files(){
	if(ENV=="development"){
    foreach($GLOBALS['DEV_JS_FOOT_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }

  if(ENV=="production"){
   foreach($GLOBALS['PROD_JS_FOOT_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }
}