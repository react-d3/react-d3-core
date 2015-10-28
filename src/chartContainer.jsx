"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  default as ChartSvg
} from './container/svg';

import {
  default as ChartTitle
} from './container/title';

import {
  default as Legend
} from './legend';

import {
  default as CommonProps,
} from './commonProps';

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

        <ChartTitle {...this.props}/>
        {legend}
        <ChartSvg {...this.props}/>

      </div>
    )
  }
}
