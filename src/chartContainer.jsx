"use strict";

import {
  default as React,
  Component,
} from 'react';

import ChartSvg from './container/svg';
import Legend from './legend';
import CommonProps from './commonProps';

export default class ChartContainer extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = CommonProps

  render() {
    const {
      width,
      chartSeries
    } = this.props;

    var legend;

    var divStyle = {
      width: width
    };

    if(chartSeries) {
      legend = <Legend
        {...this.props}
        chartSeries = {chartSeries}
      />
    }

    return (
      <div style={divStyle}>
        {legend}
        <ChartSvg {...this.props}/>
      </div>
    )
  }
}
