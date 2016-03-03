"use strict";

import React, { Component } from 'react'
import {Yaxis} from '../../src'

const generalChartData = require("./data/state_age.json");
const ageNames = Object.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

generalChartData.forEach(function(d) {
  var y0 = 0;
  d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
  d.total = d.ages[d.ages.length - 1].y1;
});

const y = function(d) {
    return d.State;
  },
  yDomain = generalChartData.map(function(d) { return d.State; }),
  yScale = 'ordinal',
  yLabel = "Age";

export default class YaxisSample extends Component {

  render() {
    return (
      <div>
        <svg width={960} height={500}>
          <Yaxis
            y= {y}
            yDomain= {yDomain}
            yBandPaddingInner={.1}
            yScale= {yScale}
            yLabel = {yLabel}
            style = {{
              "transform": "rotate(45deg)"
            }}
          />
        </svg>
        <svg width={960} height={500}>
          <Yaxis
            y= {y}
            yDomain= {yDomain}
            yBandPaddingInner={.1}
            yScale= {yScale}
            yOrient="right"
            yLabelPosition="right"
            yLabel = {yLabel}
            style = {{
              "transform": "rotate(45deg)"
            }}
          />
        </svg>
      </div>
    )
  }
}
