"use strict";

var React = require('react');
var Xaxis = require('../../lib/index.js');

(function() {
  var generalChartData = require("json!../src/state_age.json");
  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  var width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    showXAxis = true,
    x = function(d) {
      return d.State;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.State; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xLabel = "Age";

  React.render(
    <svg width={width} height={height}>
      <Xaxis
        width= {width}
        height= {height}
        margins= {margins}
        showXAxis= {showXAxis}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xTickPadding = {3}
        xInnerTickSize = {6}
        xOuterTickSize = {6}
        xLabel = {xLabel}
        xLabelPosition = 'bottom'
      />
    </svg>
  , document.getElementById('blank-xaxis')
  )

})()
