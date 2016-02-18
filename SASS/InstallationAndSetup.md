# SASS: Installation and Setup
#### Installation
- install ruby
```
http://rubyinstaller.org/
```
- install sass
```ruby
gem install sass
```
- install compass
```ruby
gem install compass
```
- (Optional) install 'normalize-scss' and 'support-for'
```ruby
gem install normalize-scss
gem install support-for
```

#### Setup
- create a new sass project
```
compass create <project_name>
```
- automatically compile our project everytime we update our SASS
```
compass watch
```
- (Optional) run a simple web server
```
python -m SimpleHTTPServer
```

#### Directory Configuration
```
base-project
|-sass
|  |-partials
|  |  |-_base.scss
|  |  |-_layout.scss
|  |  |-_mixins.scss
|  |  |-_variabls.scss
|  |
|  |-ie.scss
|  |-prints.scss
|  |-screen.scss
|  |-styles.scss
| 
|-config.rb
|-index.html
```
- config.rb
```ruby
require 'compass/import-once/activate'
require 'support-for'
require 'normalize-scss'

http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
```
- index.html
```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="stylesheets/styles.css">
</head>
  <body>
  </body>
</html>
```
- styles.scss
```sass
@import "compass";
@import "normalize";
@import "partials/variables";
@import "partials/base";
@import "partials/layout";
@import "partials/mixin";
```

