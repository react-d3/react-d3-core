"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  default as Axis,
} from './axis';

import {
  default as Label
} from './label';

import {
  default as CommonProps,
} from '../commonProps';

export default class Xaxis extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    showXAxis: true,
    xAxisClassName: 'react-d3-core__axis__xAxis',
    xScale: 'linear',
    xOrient: 'bottom',
    xTickOrient: 'bottom'
  })

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    showXAxis: PropTypes.bool,
    x: PropTypes.func.isRequired,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string.isRequired,
    xOrient: PropTypes.oneOf(['top', 'bottom']),
    xTickOrient: PropTypes.oneOf(['top', 'bottom']),
    xAxisClassName: PropTypes.string,
    xInnerTickSize: PropTypes.number,
    xOuterTickSize: PropTypes.number,
    xTickPadding: PropTypes.number,
    xTickFormat: PropTypes.func,
    xTicks: PropTypes.number,
    setScale: PropTypes.func
  }

  render() {
    const {
      height,
      width,
      margins,
      showXAxis,
      x,
      xAxisClassName,
      xDomain,
      xRange,
      xRangeRoundBands,
      xScale,
      xOrient,
      xTickOrient,
      xTickPadding,
      xInnerTickSize,
      xOuterTickSize,
      xTickFormat,
      xTicks,
      setScale,
      xLabel,
      xLabelPosition,
      labelOffset
    } = this.props;

    var t;
    var axisLabel;

    if (xOrient === 'bottom') {
      // x - bottom
      t = `translate(0, ${height - margins.bottom - margins.top})`;
    } else if (xOrient === 'top'){
      // x - top
      t = `translate(0, 0)`;
    }

    if(xLabel) {
      axisLabel = <Label
        height= {height}
        width= {width}
        margins= {margins}
        labelTitle= {xLabel}
        labelPosition= {xLabelPosition}
        labelOffset= {labelOffset}
        rangeRoundBands= {xRangeRoundBands}
        />
    }

    return (
      <g transform= {t}>
        <Axis
          height= {height}
          width= {width}
          margins= {margins}
          showAxis= {showXAxis}
          axisClassName= {xAxisClassName}
          rangeRoundBands= {xRangeRoundBands}
          type = "x"
          proxy = {x}
          domain = {xDomain}
          range = {xRange}
          scale = {xScale}
          orient = {xOrient}
          tickOrient = {xTickOrient}
          tickFormat = {xTickFormat}
          tickPadding = {xTickPadding}
          innerTickSize = {xInnerTickSize}
          outerTickSize = {xOuterTickSize}
          ticks = {xTicks}
          setScale = {setScale}
          />
        {axisLabel}
      </g>
    )
  }
}
