# Xaxis

Xaxis component documents. Xaxis is a component, which including Axis, Label components.

## Import

```js
var Xaxis = require('react-d3-core').Xaxis;
```

## Example

```js
var React = require('react');
var Xaxis = require('react-d3-core').Xaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!../../data/garbage.csv");
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  // setting you svg width
  var width = 500,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    x = function(d) {
      return parseDate(d.month);
    },
    // set your x domain
    xDomain = d3.extent(chartData, function(d){ return x(d) }),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'time',
    // set your label name
    xLabel = "Month";

  React.render(
    <svg width={width} height={height}>
      <Xaxis
        width= {width}
        height= {height}
        margins= {margins}
        x= {x}
        xDomain= {xDomain}
        xRange = {xRange}
        xScale= {xScale}
        xLabel= {xLabel}
      />
    </svg>
  , document.getElementById('garbage-xaxis')
  )
})()
```

## Settings props

You can customize `Xaxis` component using the following properties.

- width
- height
- margins
- showXAxis
- xAxisClassName
- x
- xDomain
- xRange
- xScale
- xRangeRoundBands
- xTickOrient
- xTickPadding
- xInnerTickSize
- xOuterTickSize
- xTickFormat
- xTicks
- setScale
- xLabelPosition (see Label -> labelPosition setting)
- xLabel (see Label -> labelTitle setting)
- labelOffset (see Label -> labelOffset setting)

### width

**default as `960` (number)**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500` (number)**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 50, right: 50, bottom: 50, left: 50}` (object)**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### xAxisClassName

**default as `react-d3-core__axis__xAxis` (string)**

`gridAxisClassName` is the setting that set the class of the `<g class="your-grid-class-name">`

#### x

**Required (function with return value)**

`x` is the accessor function of your `x` axis data. For instance, you have a data like.

```json
[
  {
    "name":"Darron Weissnat IV",
    "BMI":20.72,
    "age":39,
    "birthday":"2005-01-03T00:00:00.000Z",
    "city":"East Russel",
    "married":false,
    "index":0
  },
  {
    "name":"Pablo Ondricka",
    "BMI":19.32,
    "age":38,
    "birthday":"1974-05-13T00:00:00.000Z",
    "city":"Lake Edytheville",
    "married":false,
    "index":1
  },
  {
    "name":"Mr. Stella Kiehn Jr.",
    "BMI":16.8,
    "age":34,
    "birthday":"2003-07-25T00:00:00.000Z",
    "city":"Lake Veronicaburgh",
    "married":false,
    "index":2
  },
  {
    "name":"Lavon Hilll I",
    "BMI":20.57,
    "age":12,
    "birthday":"1994-10-26T00:00:00.000Z",
    "city":"Annatown",
    "married":true,
    "index":3
  }
]
```

and you want to have index as your `x` value, you just set your `x` value to

```js
x = (d) => {
  return d.index;
}
```

#### xDomain

**Required (array)**

Your `xDomain` prop is to set your xaxis domain, which is your input domain of your x scale.  In most cases, it is something like `[min value, max value]`.

#### xRange

**Required (array)**

**Default as `[0, width - margins.left - margins.right]`**

Your `xRange` prop is to set your axis range, which is your output range of your x scale. In most cases, it is `[0, width - margins.left - margins.right]`

#### xScale

**Required a d3 scale (should be one of the types )**

**Default as `linear`**

We support scale types:

- linear
- identity
- sqrt
- pow
- log
- quantize
- quantile
- ordinal
- time

#### xRangeRoundBands

**Optional (object)**

If you need to setup your `rangeRoundBands` at your x axis. You have to pass an object to the prop with your interval or padding or outerPadding.

```json
{
  "interval": "<your interval>",
  "padding": "<your padding>",
  "outerPadding": "<your outerPadding>"
}
```
