# Container

Container component documents. Container component included title and svg component. This will create a your chart title and a blank `svg`.

## Import

```js
import {
  Chart as Chart
} from 'react-d3-core'
```

## Components

`container` component contains:

- [Svg](./svg.md)
- [Title](./title.md)


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
