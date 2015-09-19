# Container

Container component documents. Container component included title and svg component. This will create a your chart title and a blank `svg`.

## Import

```js
import {
  Chart as Chart
} from 'react-d3-core'
```

## Settings props

You can customize `Legend` component using the following properties.

- width
- height
- margins
- id
- svgClassName
- title
- titleClassName

### width

**default as `960`**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500`**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 20, right: 50, bottom: 20, left: 50}`**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### id

**default as `react-d3-core__container_svg__(auto generate unique id)`**

`id` is the setting that set the id of your `svg`

### svgClassName

**default as `react-d3-core__container_svg`**

`svgClassName` is the setting that set the class of the svg `class="your-svg-class-name"`

### title

**default as 'Chart Title'**

`title` is the title that will show up on top of your chart.

### titleClassName

**default as `react-d3-core__container_title`**

`titleClassName` is the setting that set the class of the title `class="your-title-class-name"`

## New components or html tags in svg

If you have new `group`, `rect`, `text` and you want to put into the `svg` that you have just created. Put it in the `<Chart>put your things here... </Chart>`.

For example:

```js
import {
  Chart as Chart
} from 'react-d3-core';

import {
  default as React,
  component,
} from 'react';

(() => {
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
