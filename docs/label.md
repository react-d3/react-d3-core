# Label

Label component documents. `Label` component often goes with `Axis` component. see `Yaxis`, `Xaxis` for examples.

## Import

```js
var Label = require('react-d3-core').Label;
```

## Example

```js
var React = require('react');
var Label = require('react-d3-core').Label;

(function() {

  var width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    labelTitle = 'new label title'


  React.render(
    <svg width={width} height={height}>
      <Label
        width= {width}
        height= {height}
        margins= {margins}
        labelTitle= {labelTitle}
        labelPosition= {labelPosition}
      />
    </svg>
  , document.getElementById('blank-label')
  )
})()
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

**default as `{top: 50, right: 50, bottom: 50, left: 50}`**

`margins` prop is the margins of the parent `svg` that wrap the legend component.

### textAnchor

**default as 'middle'**

Set your `text-anchor` in your `label`, should be one of start, middle, end.

### labelTitle

**defulat as 'label title'**

Set your label title.

### labelOffset

**default as 40**

`labelOffset` set the offset of the label.

### labelPosition

**default as 'bottom'**

Where your label position is should be one of top, bottom, left, right.

### labelClassName

**default as 'react-d3-core__label'**

Setup your label's class name.
