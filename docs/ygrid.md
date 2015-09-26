# yGrid

Grid component is where we construct your grid system into your chart. If you want to build a `ygrid`, set your `Grid` component type to `y`.

## Import

```js
import {
  Grid as Grid
} from 'react-d3-core';
```

`grid` component contains:

- [axis](./axis.md)

## Settings props

You can customize `Grid` component using the following properties.

- width
- height
- margins
- type (set `x` if building `xaxis`, `y` if building `yaxis`)
- gridAxisClassName
- y
- yDomain
- yRange
- yScale
- yRangeRoundBands

### width

**default as `960` (number)**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500` (number)**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 20, right: 50, bottom: 20, left: 50}` (object)**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### type

**default as `x` (string)**

`type` prop define which kind of grid system do you want to make x or y.

### gridAxisClassName

**default as `react-d3-core__grid_axis` (string)**

`gridAxisClassName` is the setting that set the class of the `<g class="your-grid-class-name">`

#### y

Same as `x` in [xGrid](./xgrid.md)

#### yDomain

Same as `xDomain` in [xGrid](./xgrid.md)

#### yRange

Simalar as `xRange` in [xGrid](./xgrid.md). Your `yRange` prop is to set your axis range, which is your output range of your y scale. In most cases, it is `[height - margins.top - margins.bottom, 0]`


#### yScale

Same as `xScale` in [xGrid](./xgrid.md)

#### yRangeRoundBands

Same as `xRangeRoundBands` in [xGrid](./xgrid.md)
