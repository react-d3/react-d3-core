"use strict";

import React, { Component } from 'react'
import {Legend} from '../../src'

const chartSeries = [
    {
      field: 'Under 5 Years'
    },
    {
      field: '5 to 13 Years'
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

export default class LegendSample extends Component {

  render() {
    return(
      <div>
        <svg width= {960} height= {500}>
          <rect height= {"100%"} width= {"100%"} fill= {"#CCC"} />
        </svg>
        <Legend
          width= {960}
          chartSeries = {chartSeries}
          swatchShape= 'circle'
        />
      </div>
    )
  }
}