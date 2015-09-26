# Label

Label component documents. `Label` component often goes with `Axis` component. see `Yaxis`, `Xaxis` for examples.

## Import

```js
import {
  Label as Label
} from 'react-d3-core'
```

## Settings props

You can customize `Label` component using the following properties.

- width
- height
- margins
- textAnchor
- labelTitle
- labelPosition
- labelOffset
- labelClassName

### width

**default as `960`**

`width` prop is the width of the parent `svg` that wrap the legend component.

### height

**default as `500`**

`height` prop is the height of the parent `svg` that wrap the legend component.

### margins

**default as `{top: 20, right: 50, bottom: 20, left: 50}`**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### textAnchor

**default as 'end'**

Set your `text-anchor` in your `label`, should be one of start, middle, end.

### labelTitle

**defulat as 'label title'**

Set your label title.

### labelOffset

**default as 35**

`labelOffset` set the offset of the label.

### labelPosition

**default as 'bottom'**

Where your label position is should be one of top, bottom, left, right.

### labelClassName

**default as 'react-d3-core__label'**

Setup your label's class name.
