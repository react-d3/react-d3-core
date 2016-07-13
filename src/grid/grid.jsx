"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import Axis from '../axis/axis';
import CommonProps from '../commonProps';

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'x',
    gridAxisClassName: 'react-d3-core__grid_axis',
    ...CommonProps
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['x', 'y']).isRequired,
    gridAxisClassName: PropTypes.string,
    x: PropTypes.func,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
    xBandPaddingInner: PropTypes.number,
    xBandPaddingOuter: PropTypes.number,
    y: PropTypes.func,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
    yBandPaddingInner: PropTypes.number,
    yBandPaddingOuter: PropTypes.number,
    xGridCount: PropTypes.array,
    yGridCount: PropTypes.array,
    xGridStyleClassName: PropTypes.string,
    yGridStyleClassName: PropTypes.string,
    xTickValues: PropTypes.array
  }

  render() {

    var {
      height,
      width,
      margins,
      type,
      gridAxisClassName,
      xBandPaddingInner,
      xBandPaddingOuter,
      x,
      xDomain,
      xRange,
      xScale,
      xGridCount,
      xGridStyleClassName,
      yBandPaddingInner,
      yBandPaddingOuter,
      y,
      yDomain,
      yRange,
      yScale,
      yGridCount,
      yGridStyleClassName,
      xTickValues,
      yTickValues
    } = this.props;

    var gridAxis;
    var t;

    if(!yRange) {
      yRange = [height - margins.top - margins.bottom, 0];
    }

    if(!xRange) {
      xRange = [0, width - margins.left - margins.right];
    }

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
        bandPaddingInner= {xBandPaddingInner}
        bandPaddingOuter= {xBandPaddingOuter}
        tickOrient= "bottom"
        orient = "bottom"
        tickSizeOuter= {0}
        tickPadding= {10}
        tickFormat= {null}
        tickSizeInner = {-tickSize}
        proxy = {x}
        domain = {xDomain}
        range = {xRange}
        scale = {xScale}
        ticks = {xGridCount}
        gridStyleClassName = {xGridStyleClassName}
        tickValues = {xTickValues}
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
        bandPaddingInner= {yBandPaddingInner}
        bandPaddingOuter= {yBandPaddingOuter}
        tickOrient= "left"
        orient= "left"
        tickSizeOuter= {0}
        tickPadding= {10}
        tickSizeInner = {-tickSize}
        tickFormat= {null}
        proxy = {y}
        scale = {yScale}
        domain = {yDomain}
        range = {yRange}
        ticks = {yGridCount}
        gridStyleClassName = {yGridStyleClassName}
        tickValues = {yTickValues}
        />
    }

    return (
      <g transform = {t}>
        {gridAxis}
      </g>
    )
  }
}
