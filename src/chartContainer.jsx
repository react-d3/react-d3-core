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

require('./css/container.css');

export default class ChartContainer extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <div>
        <ChartTitle {...this.props}/>
        <ChartSvg {...this.props}/>
      </div>
    )
  }
}
