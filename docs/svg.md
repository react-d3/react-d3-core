# Svg

Building a blank Svg for your charts!

## Import

```js
var Svg = require('react-d3-core').Svg;
```

## Usage

```js
var width = 960,
  height = 500,
  margins = {top: 50, right: 50, bottom: 50, left: 50},
  id = "test-chart",
  svgClassName = "test-chart-class";

(function() {
  React.render(
    <Svg
      width= {width}
      height= {height}
      margins= {margins}
      id= {id}
      svgClassName= {svgClassName}
      >
    </Svg>
  , document.getElementById('new-svg')
  )
})()
```

## Setting props

You can customize `Svg` component using the following properties.

- width
- height
- margins
- id
- svgClassName


### width

**default as `960`**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500`**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 50, right: 50, bottom: 50, left: 50}`**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### id

**default as `react-d3-core__container_svg__(auto generate unique id)`**

`id` is the setting that set the id of your `svg`

### svgClassName

**default as `react-d3-core__container_svg`**

`svgClassName` is the setting that set the class of the svg `class="your-svg-class-name"`
