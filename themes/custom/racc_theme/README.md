# Base configuration for theme
This library contains the bare bones structure for the SCSS configurations 
and file strucure

## Usage
To use this base theming library the following steps detailed in the @TODOs 
list, also please read the SCSS documentation in the following url: <br/>

```
[domain]/sites/all/themes/experiment/docs/index.html
```

Please use the designed file structure, comments and notations so anybody can 
jump in the project and get up-to-speed with the less amount of pain as 
possible.

#### Panels usage
If a panel layout definition its required in the theme, a task has been 
defined to handle compilation in the _**gulp.js**_ file, a css file will be 
included after the gulp tasks its run:

```
gulp sass:panels
```

The following steps are required in order to make such functionality work:
* Include this definition in **.info** file:

  ```
   ; ========================================
   ; Plugins
   ; ========================================
   plugins[panels][layouts] = panels/layouts
  ```

* Create following path of folders

  ```
  panels
  +-- layouts
  |   +-- theme_layout_name
  |   |   +--  theme-layout-name.scss
  |   |   +--  theme-layout-name.tpl.php
  |   |   +--  theme-layout-name.png
  |   |   +--  theme_layout_name.inc
  ```

* Check panel documentation for _**.inc**_ file contents. (https://www.drupal.org/node/495654)

#### Breakpoints usage
If responsive images are to be included in the project. The following steps 
must be done after installing **picture** and **breakpoints** Drupal contrib 
modules:

* Include breakpoint definitions in **.info** file, these breakpoint 
definitions **must** have the same configurations as in the _**_breakpoints
.scss_** file in the **Variables** folder (refer to table of contents):

  ```
  ; ==========================================
  ; Breakpoints
  ; Update breakpoints using media query formats
  ; I.E.: breakpoints[xlarge-screen] = (min-width: 1600px)
  ; ========================================
  breakpoints[xsmall-screen] = 
  breakpoints[small-screen] = 
  breakpoints[medium-screen] = 
  breakpoints[large-screen] = 
  breakpoints[xlarge-screen] = 
  ``` 

## Contents

### Libraries

* **Vertical Rhythm** <br/>
  LibSASS compliant vertical rhythm library

  ```
  libraries/vertical_rhythm/_vertical_rhythm.scss
  ```

### Abstractions
* **Mixins library** <br/>
  Mixins library to be used on the site, check docs to get familiar with the 
  functionality and usage.

  ```
  abstractions/_mixins.scss
  ```

* **Placeholder library** <br/>
  Collection of useful placeholders to be used across the site, review docs 
  to get familiar with the functionality. 

  ```
  abstractions/_placeholders.scss
  ```

* **Project extendables** <br/>
  Collection of mixins and placeholders relative only to the present 
  particular project, please update the mixins/placeholders provided to fit 
  design requirements and feel free to include any mixins that could be 
  useful for the project.

  ```
  abstrations/_project-extendables.scss
  ```
  
### Variables

* **Breakpoints definitions** <br/>
  Breakpoint definitions based on _Google Material Design_

  ```
  variables/_breakpoints.scss
  ```

* **Colors definitions** <br/>
  Palettes of colors defined based on the mockup

  ```
  variables/_colors.scss
  ```

* **Layout definitions** <br/>
  Contains **susy** base configuration, vertical rhythm configuration and 
  mixins to implement responsive content based on line width on each 
  breakpoint with margin or padding implementations   

  ```
  variables/_layout.scss
  ```

* **Typography definitions** <br/>
  Font imports and placeholder definitions, font definitions must be 
  implemented like the following example so they can be extended in the best 
  way across the site, I.E.:

  ```scss
  %fontname-regular {
    font-family: "Font Family Name";
    font-weight: 200;
  }
  
  %fontname-bold {
    font-family: "Font Family Name";
    font-weight: 400;
  }
  ```

  ```
  variables/_typography.scss
  ```

### Base
Theming implemented for markup globally, this should be the first set of 
files updated after finishing the **@TODOs after clone**, the style guide 
contrib module it's useful to get an output and a reliable preview of all the
 elements that need to be updated. The files have been split so they contain 
 digestible and well scoped chunks of code.

 ```
 base/_comments.scss
 base/_forms.scss
 base/_global-elements.scss
 base/_headers.scss
 base/_lists.scss
 base/_messages.scss
 base/_pager.scss
 base/_primary-tabs.scss
 base/_search.scss
 base/_tables.scss
 ```

### Components
Empty folder that will contain styling for global components, blocks, 
views displays, etc.<br/>

**Suggested file structure**

```
 Components
 +-- global
 |   +-- _header.scss
 |   +-- _footer.scss
 +-- blocks
 |   +-- _newsletter-subscription.scss
 +-- displays
 |   +-- _articles-teaser-list.scss
```

### Pages
Empty folder that will contain styling for pages that don't fit in the 
components definitions and overrides to components in a page per page basis 
if required.

**Suggested file structure**

```
 Components
 +-- global
 |   +-- _landing-pages.scss
 |   +-- _detail-pages.scss
 +-- panel-pages
 |   +-- _homepage.scss
 +-- nodes
 |   +-- _articles.scss
 +-- taxonomy
 |   +-- _tags.scss
```

## @TODOs after clone
* After finish the download of the repo update the _**theme.styles.scss**_ to 
include files with the following order (This is really important).
  
  * Dependencies
  * Libraries
  * Variables
  * Abstractions
  * Base
  * Components
  * Pages
  
  The order this folders are included it's really important. To include the 
  folders use the sass globing function, I.E.: 
  
  ```
  // Dependencies
  @import "susy";
  @import "breakpoint";
  
  // Includes
  @import "libraries/**/*.scss";
  @import "variables/**/*.scss";
  @import "abstractions/**/*.scss";
  @import "base/**/*.scss";
  @import "components/**/*.scss";
  @import "pages/**/*.scss";
  ```
  
* Update _**package.json**_ file, don't forget to update "name" attribute.
  
  ```json
  {
    "name": "[theme_name]",
    "version": "1.0.0",
    "scripts": {
      "postinstall": "find node_modules/ -name '*.info' -type f -delete"
    },
    "devDependencies": {
      "breakpoint-sass": "^2.6.1",
      "browser-sync": "^2.9.8",
      "gulp": "^3.9.0",
      "gulp-autoprefixer": "^3.1.0",
      "gulp-plumber": "^1.0.1",
      "gulp-sass": "^2.0.4",
      "gulp-sourcemaps": "^1.5.2",
      "gulp-watch": "^4.3.3",
      "node-sass-globbing": "0.0.23",
      "susy": "~2.2.2"
    }
  }
  ```
  
* Update _**gulp.js**_ file, don't forget to update proxy for browser sync to
 work properly.

  ```js
  'use strict';
  
  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');
  var autoprefixer = require('gulp-autoprefixer');
  var importer = require('node-sass-globbing');
  var plumber = require('gulp-plumber');
  var browserSync = require('browser-sync').create();
   
  // Default compile task with browser sync
  gulp.task('browser-sync', function () {
    browserSync.init({
      injectChanges: true,
      // Update proxy URL
      proxy: "http://local-path.dev"
    });
    gulp.watch("./sass/**/*.scss", ['sass:dev']).on('change', browserSync.reload);
  });
  
  // PROD compile task
  gulp.task('sass:prod', function () {
    gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 version']
      }))
      .pipe(gulp.dest('./css'));
  });
  
  // DEV compile task
  gulp.task('sass:dev', function () {
    gulp.src('./sass/**/*.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({
        importer: importer,
        includePaths: [
          './node_modules/breakpoint-sass/stylesheets/',
          './node_modules/susy/sass/',
          './node_modules/compass-mixins/lib/'
        ]
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 version']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'));
  });
  
  // Panels layout compile task
  gulp.task('sass:panels', function () {
    gulp.src('./panels/layouts/**/*.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({
        importer: importer,
        includePaths: [
          './node_modules/breakpoint-sass/stylesheets/',
          './node_modules/susy/sass/',
          './node_modules/compass-mixins/lib/'
        ]
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 version']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./panels/layouts/'));
  });
  
  // Default task definition
  gulp.task('default', ['browser-sync']);
  ```

* Include the following behavior in order to use the responsive tables 
functionality (Don't forget to update behavior name in the comment and 
definition):

  ```javascript
  /**
   * Adds data attribute to all TDs in the table with a value corresponding
   * to its TH tag per each column
   *
   * @type {{attach: Drupal.behaviors.themeTableDataAttr.attach}}
   */
  Drupal.behaviors.themeTableDataAttr = {
    attach: function (context, settings) {
      $('table td', context).each(function () {
        var tdIndex = $(this).index();
        var thTable = $(this).closest('table').find('th').eq(tdIndex).html();

        // Validate TH value isn't a valid html element, capture HTML value
        thValidator = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>/g;
        if (thValidator.test(thTable)) {
          thTable = $(thTable).text();
        }

        if (typeof thTable != 'undefined') {
          $(this).attr('data-label', thTable);
        }
      })
      $('.element').append($('</div>').addClass('class'));
    }
  };
  ```
  