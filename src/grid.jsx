"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as Axis,
} from './axis/axis';

import {
  default as CommonProps,
} from './commonProps';

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    type: 'x',
    legendOffset: 90,
    gridAxisClassName: 'react-d3-core__grid_axis'
  })

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['x', 'y']).isRequired,
    gridAxisClassName: PropTypes.string,
    x: PropTypes.func.isRequired,
    xDomain: PropTypes.array.isRequired,
    xRange: PropTypes.array.isRequired,
    xScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
    xRangeRoundBands: PropTypes.object,
    y: PropTypes.func.isRequired,
    yDomain: PropTypes.array.isRequired,
    yRange: PropTypes.array.isRequired,
    yScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
    yRangeRoundBands: PropTypes.object,
  }

  render() {
    const {
      height,
      width,
      margins,
      type,
      gridAxisClassName,
      xRangeRoundBands,
      x,
      xDomain,
      xRange,
      xScale,
      yRangeRoundBands,
      y,
      yDomain,
      yRange,
      yScale,
    } = this.props;

    var gridAxis;
    var t;


    if(type === 'x') {
      t = `translate(0, ${height - margins.bottom - margins.top})`;
      var tickSize = height - margins.top - margins.bottom;

      // if grid axis don't pass customize ticks.
      gridAxis = <Axis
        height= {height}
        width= {width}
        margins= {margins}
        type= "gridx"
        showAxis= {false}
        gridAxisClassName= {gridAxisClassName}
        rangeRoundBands= {xRangeRoundBands}
        tickOrient= "bottom"
        orient = "bottom"
        outerTickSize= {0}
        tickPadding= {10}
        tickFormat= {null}
        innerTickSize = {-tickSize}
        proxy = {x}
        domain = {xDomain}
        range = {xRange}
        scale = {xScale}
        />
    } else if(type === 'y') {
      t = `translate(0, 0)`;
      var tickSize = width - margins.left - margins.right;

      // if grid axis don't pass customize ticks.
      gridAxis = <Axis
        height= {height}
        width= {width}
        margins= {margins}
        type= "gridy"
        showAxis= {false}
        gridAxisClassName= {gridAxisClassName}
        rangeRoundBands= {yRangeRoundBands}
        tickOrient= "left"
        orient= "left"
        outerTickSize= {0}
        tickPadding= {10}
        innerTickSize = {-tickSize}
        tickFormat= {null}
        proxy = {y}
        scale = {yScale}
        domain = {yDomain}
        range = {yRange}
        />
    }

    return (
      <g transform = {t}>
        {gridAxis}
      </g>
    )
  }
}
