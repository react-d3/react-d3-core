"use strict";

import React, {Component} from 'react'
import {Chart} from '../../src'

const width = 960,
  height = 500,
  margins = {top: 20, right: 50, bottom: 20, left: 50},
  id = "test-chart",
  svgClassName = "test-chart-class",
  titleClassName = "test-chart-title-class";

const chartSeries = [
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

const title = "test chart lib"

export default class ContainerSample extends Component {

  render() {
    return(
      <Chart
        title= {title}
        width= {width}
        height= {height}
        margins= {margins}
        id= {id}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        chartSeries= {chartSeries}
      />
    )
  }
}