"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Legend as Legend,
  Grid as Grid,
  Label as Label,
} from '../../src/index';

export default class BlankChart extends Component {

  render() {

    return (
      <Chart {...this.props}>
        <Grid type="x" {...this.props} {...this.state} />
        <Grid type="y" {...this.props} {...this.state} />
        <Legend {...this.props} {...this.state} />
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}
