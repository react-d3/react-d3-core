"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Xaxis = require('../../lib').Xaxis;

(function() {
  var generalChartData = require("json!./data/state_age.json");
  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  var x = function(d) {
      return d.State;
    },
    xDomain = generalChartData.map(function(d) { return d.State; }),
    xRangeRoundBands = {interval: [0, 860], padding: .1},
    xScale = 'ordinal',
    xLabel = "Age";

  ReactDOM.render(
    <svg width={960} height={500}>
      <Xaxis
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xLabel = {xLabel}
      />
    </svg>
  , document.getElementById('blank-xaxis')
  )

})()
