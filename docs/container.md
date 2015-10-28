# Container

Container component documents. Container component included title and svg component. This will create a your chart title and a blank `svg`.

## Import

```js
var Chart = require('react-d3-core').Chart;
```

## Example

```js
var React = require('react');
var Chart = require('react-d3-core').Chart;

// Example
(function() {

  var width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

  var title = "test chart lib"

  React.render(
    <Chart
      title= {title}
      width= {width}
      height= {height}
      margins= {margins}
      id= {id}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
    />
  , document.getElementById('blank-container'))

})()
```

## Components

`container` component contains:

- [Svg](./svg.md)
- [Title](./title.md)
- [Legend](./legend.md)


## Settings props

You can customize `Container` component using the following properties.

#### Svg

see detail in [Svg component](./svg.md)

- width
- height
- margins
- id
- svgClassName

#### Title

see detail in [Title component](./title.md)

- title
- titleClassName

#### Legend

see detail in [Legend component](./legend.md)


## New components or html tags in svg

If you have new `group`, `rect`, `text` and you want to put into the `svg` that you have just created. Put it in the `<Chart>put your things here... </Chart>`.

For example:

```js
var React = require('react');
var Chart = require('react-d3-core').Chart;

(function() {
  React.render(
    <Chart {...this.props}>
      <g>
        <text></text>
      </g>
    </Chart>
    , document.getElementById('new-id')
  )
})()
```
