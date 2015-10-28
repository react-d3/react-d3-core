# Yaxis

Yaxis component documents. Yaxis is a component, which including Axis, Label components.

## Import

```js
var Yaxis = require('react-d3-core').Yaxis;
```

## Settings props

You can customize `Yaxis` component using the following properties.

- width
- height
- margins
- showYAxis
- yAxisClassName
- y
- yDomain
- yRange
- yScale
- yRangeRoundBands
- TickOrient
- yTickPadding
- yInnerTickSize
- yOuterTickSize
- yTickFormat
- yTicks
- setScale
- yLabelPosition (see Label -> labelPosition setting)
- yLabel (see Label -> labelTitle setting)
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

### yAxisClassName

**default as `react-d3-core__axis__yAxis` (string)**

`gridAxisClassName` is the setting that set the class of the `<g class="your-grid-class-name">`

#### y

**Required (function with return value)**

`y` is the accessor function of your `y` axis data. For instance, you have a data like.

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

and you want to have index as your `y` value, you just set your `y` value to

```js
y = (d) => {
  return d.index;
}
```

#### yDomain

**Required (array)**

Your `yDomain` prop is to set your yaxis domain, which is your input domain of your y scale.  In most cases, it is something like `[min value, max value]`.

#### yRange

**Required (array)**

**default as `[height - margins.top - margins.bottom, 0]`**

Your `yRange` prop is to set your axis range, which is your output range of your y scale. In most cases, it is `[height - margins.top - margins.bottom, 0]`

#### yScale

**Required a d3 scale (should be one of the types )**

**default as `linear`**

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

#### yRangeRoundBands

**Optional (object)**

If you need to setup your `rangeRoundBands` at your y axis. You have to pass an object to the prop with your interval or padding or outerPadding.

```json
{
  "interval": "<your interval>",
  "padding": "<your padding>",
  "outerPadding": "<your outerPadding>"
}
```
