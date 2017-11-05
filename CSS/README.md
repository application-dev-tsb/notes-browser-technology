# Cascading Style Sheets

- CSS: Basics
- [CSS: Selectors](CSS/Selectors.md)
- CSS: Box (Margin, Border, Padding)
- CSS: Colors
- CSS: Positioning
- CSS: Display Block or Inline
- [CSS: Display Flex](CSS/DisplayFlex.md)
- CSS: Table Properties
- CSS: Image Clipping
- CSS: List Style
- CSS: Inserting Contents and Autoincrement Counter
- CSS: Text Decoration
- CSS: Shadow
- CSS: Border Radius
- CSS: Color Gradient
- CSS: Transform (Scale, Rotate, Skew, Translate)
- CSS: Transition and Animation (Keyframe)
- CSS: Columns

## Basics
### Import
```
@import "other.css";
```
### Selector
```css
//select all
* {
  font-family: "Arial Black', sans-serif"
}

//select by id
#myId {

}

//div>span>a
div span a {

}

//div OR span OR a
div, span, a {

}
```
### Unit Types
- Pixels
- Points: 72 points = 1 inch
- Ems: current font size
- Percent: current font size is equal to 100%

## Box Model
- Margin: space outside the element
- Border
- Padding: space inside the element
