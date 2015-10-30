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

export default class Yaxis extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    showYAxis: true,
    yAxisClassName: 'react-d3-core__axis__yAxis',
    yScale: 'linear',
    yOrient: 'left',
    yTickOrient: 'left',
    yLabelPosition: 'left',
    yTickPadding: 3,
    yInnerTickSize: 6,
    yOuterTickSize: 6
  })

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    showXAxis: PropTypes.bool,
    y: PropTypes.func.isRequired,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string.isRequired,
    yOrient: PropTypes.oneOf(['left', 'right']),
    yTickOrient: PropTypes.oneOf(['left', 'right']),
    yAxisClassName: PropTypes.string,
    yInnerTickSize: PropTypes.number,
    yOuterTickSize: PropTypes.number,
    yTickPadding: PropTypes.number,
    yTickFormat: PropTypes.func,
    yTicks: PropTypes.array
  }

  render() {
    var {
      width,
      height,
      margins,
      y,
      yAxisClassName,
      yDomain,
      yRange,
      yRangeRoundBands,
      yScale,
      yOrient,
      yTickOrient,
      yTickFormat,
      yTickPadding,
      yInnerTickSize,
      yOuterTickSize,
      yTicks,
      yLabel,
      yLabelPosition,
      labelOffset,
      showYAxis
    } = this.props;

    var t;
    var axisLabel;

    if(!yRange) {
      yRange = [height - margins.top - margins.bottom, 0];
    }

    if (yOrient === 'right') {
      // y - right
      t = `translate(${width - margins.right - margins.left}, 0)`;
    } else if (yOrient === 'left'){
      // y - left
      t = `translate(0, 0)`;
    }

    if(yLabel) {
      axisLabel = <Label
        height= {height}
        width= {width}
        margins= {margins}
        labelTitle= {yLabel}
        labelPosition= {yLabelPosition}
        labelOffset= {labelOffset}
      />
    }


    return (
      <g transform= {t}>
        <Axis
          height= {height}
          width= {width}
          margins= {margins}
          showAxis= {showYAxis}
          axisClassName= {yAxisClassName}
          rangeRoundBands= {yRangeRoundBands}
          type = "y"
          proxy = {y}
          domain = {yDomain}
          range = {yRange}
          scale = {yScale}
          orient = {yOrient}
          tickOrient = {yTickOrient}
          tickFormat = {yTickFormat}
          tickPadding = {yTickPadding}
          innerTickSize = {yInnerTickSize}
          outerTickSize = {yOuterTickSize}
          ticks = {yTicks}
          />
        {axisLabel}
      </g>
    )
  }
}
