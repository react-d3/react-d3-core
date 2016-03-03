"use strict";

import React, { Component } from 'react'
import {Grid} from '../../src'
import D3Array from 'd3-array'

const generalChartData = require('./data/user_sample.json');

const width = 960,
  height = 500,
  margins = {top: 20, right: 50, bottom: 30, left: 50},
  gridAxisClassName = "test-grid-class",
  x = function(d) {
    return d.index;
  },
  xDomain = D3Array.extent(generalChartData, x),
  xRange = [0, width - margins.left - margins.right],
  xScale = 'linear',
  y = function(d) {
    return d.age;
  },
  yDomain = D3Array.extent(generalChartData, y),
  yRange = [height - margins.top - margins.bottom, 0],
  yScale = 'linear';


export default class GridSample extends Component {

  render() {
    return (
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
    )
  }
}