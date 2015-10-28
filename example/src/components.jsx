"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BlankChart = require('./blank_chart.jsx');

(function() {

  var generalChartData = require("json!./data/state_age.json");
  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 100, left: 100},
    id = "test-chart",
    title = "test chart lib",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years',
        color: '#1f77b4'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years',
        color: '#ff7f0e'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years',
        color: '#2ca02c'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years',
        color: '#d62728'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years',
        color: '#9467bd'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years',
        color: '#8c564b'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over',
        color: '#e377c2'
      },

    ],
    x = function(d) {
      return d.State;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.State; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Age",
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yDomain = [0, d3.max(generalChartData, function(d) { return d.total; })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s");

  ReactDOM.render(
    <BlankChart
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      id= {id}
      margins= {margins}
      labelOffset = {70}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
      yAxisClassName= {yAxisClassName}
      xAxisClassName= {xAxisClassName}
      legendPosition= 'right'
      categoricalColors= {d3.scale.category10()}
      chartSeries = {chartSeries}
      lineClass = 'test-line-class'
      barClass= 'test-bar-class'
      scatterClass = 'test-line-dot-class'
      gridAxisClassName = 'grid-axis-class'
      showScatter = {true}
      showLegend= {showLegend}
      showXAxis= {showXAxis}
      showYAxis= {showYAxis}
      x= {x}
      showXGrid= {false}
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
      y= {y}
      showYGrid= {true}
      yOrient= {yOrient}
      yDomain= {yDomain}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yTickPadding = {4}
      yInnerTickSize = {6}
      yOuterTickSize = {6}
      yTickFormat= {yTickFormat}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('blank-blank_chart')
  )
})()
