# react-d3-core

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-core.svg)](https://gemnasium.com/react-d3/react-d3-core)

react d3 core components for reusability.

`react-d3-core` is includes the core components of the `react-d3` projects. The reason we extract the main component here, is because of reusability. For instance, we use grid, axes over and over again in line chart, area chart, bar chart ... etc. If we move these system a little bit forward to a react component we can declare it more easily in the future.  

Such as we need xaxis, yaxis, grid in a new chart.  We can install `react-d3-core` and import them.


## Install

```
npm install react-d3-core
```

## LIVE DEMO

http://reactd3.org/docs/core


## Quick example

#### With webpack

- Legend

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Legend = require('../../lib/index').Legend;

(function() {
  var chartSeries = [
      {
        field: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years'
      }
    ]

  ReactDOM.render(
    <div>
      <svg width= {960} height= {500}>
        <rect height= {"100%"} width= {"100%"} fill= {"#CCC"} />
      </svg>
      <Legend
        width= {960}
        chartSeries = {chartSeries}
      />
    </div>
  , document.getElementById('blank-legend')
  )
})()
```


#### In HTML (without build tools)

Clone code `react-d3-core.js` or minify js `react-d3-core.min.js` and include the script in your HTML.

You'll also need `react`, `react-dom`, `d3`

- Legend

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Line Chart example
    </title>
  </head>
  <body>
    <div id="blank-legend"></div>
    <script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
    <script src="../react-d3-core.min.js"></script>
    <script type="text/babel">
      var Legend = ReactD3Core.Legend;
      var chartSeries = [
          {
            field: 'Under 5 Years'
          },
          {
            field: '5 to 13 Years'
          }
        ]

      ReactDOM.render(
        <div>
          <svg width= {960} height= {500}>
            <rect height= {"100%"} width= {"100%"} fill= {"#CCC"} />
          </svg>
          <Legend
            width= {960}
            chartSeries = {chartSeries}
          />
        </div>
      , document.getElementById('blank-legend')
      )
    </script>
  </body>
</html>
```

## Supported Components

#### Container

- [Chart](./docs/container.md)
- [Svg](./docs/svg.md)
- [Title](./docs/title.md)

#### Axis

- [Axis](./docs/axis.md)
- [Xaxis](./docs/xaxis.md)
- [Yaxis](./docs/yaxis.md)

#### Grid

- [xGrid](./docs/xgrid.md)
- [yGrid](./docs/ygrid.md)

#### Label

- [Label](./docs/label.md)

#### Legend

- [Legend](./docs/legend.md)


## Develop

```
$ npm install
$ node devServer.js
```

Open `localhost:5000/example`

## History

#### Before v1.1.x ...
  
  - Initial release
  - Babel 5
  - D3 3.0

#### 2016 / 3 / 3, v1.2.0
  
  - Move to Babel 6.
  - D3 4.0.
  - improve example folder.


## License

Apache 2.0
