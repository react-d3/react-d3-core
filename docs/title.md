# Title

Your chart title.

## Import

```js
var Title = require('react-d3-core').Title;
```

## Example

```js
var title = "test-chart",
  titleClassName = "test-chart-class";

(function() {
  React.render(
    <Title
      title= {title}
      titleClassName= {titleClassName}
      />
  , document.getElementById('title')
  )
})()
```

## Setting props

You can customize `Title` component using the following properties.

- title
- titleClassName

### title

**default as 'Chart Title'**

`title` is the title that will show up on top of your chart.

### titleClassName

**default as `react-d3-core__container_title`**

`titleClassName` is the setting that set the class of the title `class="your-title-class-name"`
