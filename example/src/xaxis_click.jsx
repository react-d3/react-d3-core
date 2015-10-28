"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Xaxis = require('../../lib/index.js').Xaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!./data/garbage.csv");
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  // setting you svg width
  var width = 400,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    x = function(d) {
      return parseDate(d.month);
    },
    // set your x domain
    xDomain = d3.extent(chartData, function(d){ return x(d) }),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'time',
    // set your label name
    xLabel = "Month";

  var ClickAxis = React.createClass({
    getInitialState: function() {
      return {
        expend: false
      }
    },
    _onClick: function() {
      this.setState({
        expend: !this.state.expend
      })
    },
    render: function() {
      var expend = this.state.expend;
      var newWidth = expend? (width + 100): width;
      var newRange = expend? ([0, width - margins.left - margins.right + 100]): ([0, width - margins.left - margins.right]);

      return (
        <svg width={newWidth} height={height} onClick={this._onClick}>
          <Xaxis
            width= {newWidth}
            height= {height}
            margins= {margins}
            x= {x}
            xDomain= {xDomain}
            xRange = {newRange}
            xScale= {xScale}
            xLabel= {xLabel}
          />
        </svg>
      )
    }
  })

  ReactDOM.render(
    <ClickAxis />
  , document.getElementById('click-xaxis')
  )
})()
