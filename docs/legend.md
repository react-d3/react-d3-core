# Legend

Legend component documents.

## Import

```js
var Legend = require('react-d3-core').Legend;
```

```js

(function() {
  var width = 960,
    height = 500,
    margins = {top: 40, right: 50, bottom: 40, left: 50},
    legendClassName = "test-legend-class",
    legendPosition = 'left',
    legendOffset = 90,
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years',
        color: '#1f77b4'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years',
        color: '#ff7f0e'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years',
        color: '#2ca02c'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years',
        color: '#d62728'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years',
        color: '#9467bd'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years',
        color: '#8c564b'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over',
        color: '#e377c2'
      },

    ]

  React.render(
    <Legend
      width= {width}
      height= {height}
      margins= {margins}
      legendClassName= {legendClassName}
      legendPosition= {legendPosition}
      legendOffset= {legendOffset}
      chartSeries = {chartSeries}
    />
    <svg width= {width} height= {height}>
      <rect height= {"100%"} width= {"100%"} fill= {"#CCC"} />
    </svg>
  , document.getElementById('blank-legend')
  )
})()

```

## Settings props

You can customize `Legend` component using the following properties.

- width
- height
- margins
- legendClassName
- legendPosition
- legendOffset
- chartSeries

### width

**default as `960`**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500`**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 50, right: 50, bottom: 50, left: 50}`**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### legendClassName

**default as `react-d3-core__legend`**

`legendClassName` is the setting that set the class of the `<g class="your-legend-class-name">`

### legendPosition

**default as `left`**

`legendPosition` can be set as `left` or `right`, which will automatically set your legend align form the left or right of your chart.

#### legendPosition = 'left'

Align legend from left.

#### legendPosition = 'right'

Align legend from right.

### legendOffset

**default as `90`**

`legendOffset` set the offset of `Legend` component.

### chartSeries

**must be a array, with objects including keys of  field, name, color**

This will set the Legend field, name, and color.

For instance:

```js
[
  {
    field: 'Under 5 Years',
    name: 'Under 5 Years',
    color: '#1f77b4'
  },
  {
    field: '5 to 13 Years',
    name: '5 to 13 Years',
    color: '#ff7f0e'
  },
  {
    field: '14 to 17 Years',
    name: '14 to 17 Years',
    color: '#2ca02c'
  },
  {
    field: '18 to 24 Years',
    name: '18 to 24 Years',
    color: '#d62728'
  },
  {
    field: '25 to 44 Years',
    name: '25 to 44 Years',
    color: '#9467bd'
  },
  {
    field: '45 to 64 Years',
    name: '45 to 64 Years',
    color: '#8c564b'
  },
  {
    field: '65 Years and Over',
    name: '65 Years and Over',
    color: '#e377c2'
  },
]
```

is the `chartSeries` of the legend shown below.
