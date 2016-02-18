# Basics: Syntactically Awesome Style Sheets

#### Comments
- single line
```sass
// singleline comment
```
- multiline
```sass
/*
Im 
a 
multiline comment
*/
```
- loud comments
```sass
/*! Loud comments are quaranteed to show up in the generated css */
```

#### Partials
- you can create a partial SASS file by appending "_" in the file name
- partial files do not get converted in CSS files

#### Import
```sass
@import "partials/variables"; //imports the file: partials/_variables.scss
```

#### Variables
- declaration
```
$base-color: #FF5544;
```
- usage
```css
//style.scss
body {
 background-color: $base-color;
}
```

#### Nesting
```css
//use this css as a reference:
body {
 color: red;
 background-color blue;
}

body a {
 color: white;
}

body h1 {
 color: blue;
}
```
- nesting provides a clear nested way to visualize a hierarchy
```scss
body {
 color: red;
 background-color: blue;
 
 a {
  color: white;
 }
 
 h1 {
  color: blue;
 }
}
```
