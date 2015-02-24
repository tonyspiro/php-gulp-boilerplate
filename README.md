#PHP Gulp Boilerplate

PHP Gulp Boilerplate gives you everything you need to get started with a well-organized, modern web application.  It's an HTML5 boilerplate with added [Gulp](http://gulpjs.com/) task management functionality. It also includes the ability to switch between development and production environments. 

In the development phase, individual CSS and JS files are output by PHP for easy building and debugging.  When it's ready for primetime, just flip the switch from "development" to "production" and your application will include the minified files.

For MAMP users, [Gulp MAMP](https://github.com/tonyspiro/gulp-mamp) is included to make configuring your development environment quick and easy.

##Getting Started

Clone the repo, install node modules and run gulp:
```
git clone https://github.com/tonyspiro/php-gulp-boilerplate
cd php-gulp-boilerplate
npm install
gulp
```
If you would like to use Gulp MAMP, go into `Gulpfile.js` and set your `site_full_path` and `port` variables, then:
```
gulp stop
gulp config
gulp start
```
You can also run this command to watch files for edits:
```
gulp watch
```

##Configuration

###config.json
1. Set the environment (development or production)
2. Set files for gulp tasks (less-cssmin, uglify, lint, watch)
3. Set output files for development and production
4. If using MAMP, set your MAMP options (optional)

### In development:
1. The index.php file will include src/css files specified in the config.php file.
2. The index.php file will include all src/js files specified in the config.php file.

### In production:
Just flip the switch into production and notice there's only one minified css file in the head, one minified js file in the `<head>` and one minified js file before the `</body>` tag.

Feel free to fork or open up issues for suggested features.
Find me on twitter [@tonyspiro](http://twitter.com/tonyspiro).