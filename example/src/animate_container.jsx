"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('../../lib/index').Chart;

// Example
(function() {

  var AnimateChart = React.createClass({
    getInitialState: function() {
      return this.props;
    },
    componentDidMount: function() {
      var title = "test chart lib"
      var i = 0;

      var that = this;

      window.setInterval(function() {

        var title_new = title + ' => ' + i + ' times';
        i++;

        if(i % 2 == 1) {
          var chartSeries = [
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
              }
            ]

          var width = 960
        }else {
          var chartSeries = [
              {
                field: 'Under 5 Years',
                name: 'Under 5 Years',
                color: '#1f77b4'
              },
              {
                field: '5 to 13 Years',
                name: '5 to 13 Years',
                color: '#ff7f0e'
              }
            ];

          var width = 500
        }

        that._updateState(title_new, chartSeries, width)
      }, 2000)
    },
    _updateState: function(title, chartSeries, width) {
      this.setState({
        title: title,
        chartSeries: chartSeries,
        width: width
      })
    },
    render: function() {
      var width = 960,
        height = 500,
        margins = {top: 20, right: 50, bottom: 20, left: 50},
        id = "test-chart",
        svgClassName = "test-chart-class",
        titleClassName = "test-chart-title-class";

      var chartSeries = [
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
          }
        ]

      var title = "test chart lib"

      return (
        <Chart
          title= {title}
          width= {width}
          height= {height}
          margins= {margins}
          id= {id}
          svgClassName= {svgClassName}
          titleClassName= {titleClassName}
          chartSeries= {chartSeries}
          {...this.state}
        />
      )
    }
  })


  ReactDOM.render(
    <AnimateChart />
  , document.getElementById('blank-animate_container'))

})()
