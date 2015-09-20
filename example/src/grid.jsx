"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  Grid as Grid
} from '../../index';

(() => {

  var generalChartData = require('json!./user_sample.json');

  const width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    gridAxisClassName = "test-grid-class",
    x = (d) => {
      return d.index;
    },
    xDomain = d3.extent(generalChartData, x),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'linear',
    y = (d) => {
      return d.age;
    },
    yDomain = d3.extent(generalChartData, y),
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear';


  React.render(
    <svg width={width} height={height}>
      <Grid
        width= {width}
        height= {height}
        margins= {margins}
        type= {'x'}
        gridAxisClassName= {gridAxisClassName}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
        y= {y}
        yDomain= {yDomain}
        yRange= {yRange}
        yScale= {yScale}
      />
      <Grid
        width= {width}
        height= {height}
        margins= {margins}
        type= {'y'}
        gridAxisClassName= {gridAxisClassName}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
        y= {y}
        yDomain= {yDomain}
        yRange= {yRange}
        yScale= {yScale}
      />
    </svg>
  , document.getElementById('blank-grid')
  )
})()
