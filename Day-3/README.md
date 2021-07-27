# Introduction to CSS

## What is CSS?

- CSS stands for Cascading Style Sheets
- CSS styles the HTML elements
- It controls the look of a Web page

## CSS Syntax

Syntax:

```css
css-selector {
  property: value;
}
```

For example:

```css
p {
  color: blue;
}
```

## Why do we use CSS?

- Makes Web pages more appealing
- Enhances User Experience
- Dynamic layout on different devices & screen sizes

## How to use CSS?

- External CSS - Styles in External file
- Internal CSS - Styles in `<style>` tag
- Inline CSS - Styles in specific HTML elements

## What are CSS Selectors?

### Element Selector

- Select elements using element names

```css
/* CSS Element Selector */

p {
  text-align: center;
}
```

### ID Selector

- Select elements using ID attributes
- Single ID can be added to HTML element
- Select a unique element
- Use `#idname` format

```css
/* CSS ID Selector */

#idname {
  color: lightgreen;
}
```

### Class Selector

- Select elements using class attributes
- Use `.classname` format
- Add multiple class to HTML element

```css
/* CSS Class Selector */

.classname {
  background-color: lightblue;
}
```

### Universal Selector

- Select all elements using `*`

```css
/* Universal Selector */

* {
  margin: 0px;
  padding: 0px;
}
```

## What is CSS grouping?

Apply CSS to multiple selectors

```css
/* CSS Grouping */

#idname,
h1,
.classname {
  color: lightgreen;
}
```

## CSS Properties and Values

### Font Color

```css
/* Font Color */

color: blue; /* Using Color Name */
color: #0000ff; /* Using Hex value */
color: rgb(0, 0, 255); /* Using RGB value */
```

### Background Color & Image

```css
/* Background Color & Image */

background-color: lightblue;
background-image: url("...");
```

### Text Alignment

```css
/* Text Alignment */

text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### Font Styling

```css
/* Font Styling */

font-family: "Times New Roman", Times, serif;
font-style: normal;
font-style: italic;
font-size: 32px;
font-size: 2em; /* 1em = 16px | Current font size */
font-weight: bold;
```

### Border

```css
/* Border */

border-style: solid;
border-width: 1px;
border-color: red;
border: 1px solid red;
```

### Margin

```css
/* Margin */

margin-bottom: auto; /* Automatically calculated by browser */
margin-top: 100px; /* Specific length in px, pt, cm etc */
margin-right: 10%; /* Specific width percentage of containing element */
margin-left: inherit; /* Inherit margin from parent element */
margin: 5px 10px 3px 6px; /* top, right, bottom, left */
margin: 10px 20px; /* top-bottom , left-right */
margin: 10px; /* All four sides */
```

### Padding

```css
/* Padding */

padding-bottom: auto; /* Automatically calculated by browser */
padding-top: 100px; /* Specific length in px, pt, cm etc */
padding-right: 10%; /* Specific width percentage of containing element */
padding-left: inherit; /* Inherit padding from parent element */
padding: 5px 10px 3px 6px; /* top, right, bottom, left */
padding: 10px 20px; /* top-bottom , left-right */
padding: 10px; /* All four sides */
```

## Media Queries

```css
body {
  text-align: left;
}

/* This CSS code will overwrite the common CSS code 
and will be applied when Screen Width < 800 px;  */
@media screen and (max-width: 800px) {
  body {
    text-align: center;
  }
}
```
