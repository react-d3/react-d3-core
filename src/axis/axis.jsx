"use strict";

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  default as d3
} from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

import {
  scale as scale
} from '../utils/scale';

export default class Axis extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    range: null,
    rangeRoundBands: null,
    domain: null,
    tickFormat: null,
    tickOrient: null
  }

  static PropTypes = {
    showAxis: PropTypes.bool,
    type: PropTypes.string,
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tickOrient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  }

  _mkTickAxis () {
    const {
      type,
      tickOrient,
      tickFormat,
      tickPadding,
      innerTickSize,
      outerTickSize,
      ticks,
    } = this.props;

    var func = d3.svg.axis();

    func.scale(this._mkScale(this.props));

    if(tickOrient)
      func.orient(tickOrient);

    if(tickFormat)
      func.tickFormat(tickFormat);

    if(tickPadding)
      func.tickPadding(tickPadding);

    if(outerTickSize)
      func.outerTickSize(outerTickSize);

    if(innerTickSize)
      func.innerTickSize(innerTickSize);

    if(ticks)
      func.ticks.apply(null, ticks);

    return func;

  }

  _mkScale () {

    const{
      type
    } = this.props;

    var func = scale(this.props);

    return func;
  }

  render () {

    const {
      showAxis,
      gridAxisClassName,
      axisClassName,
      type
    } = this.props;

    var axisGroup = ReactFauxDOM.createElement('g');

    if(type === 'x')
      var axisClasses = `${axisClassName} axis x`
    else if(type === 'y')
      var axisClasses = `${axisClassName} axis y`
    else if(type === 'gridx' || type === 'gridy')
      var axisClasses = `${gridAxisClassName} grid-axis axis`

    axisGroup.setAttribute('class', axisClasses);

    var axisDom = d3.select(axisGroup);

    axisDom.call(this._mkTickAxis());

    if(!showAxis) {
      axisDom.selectAll(".axis .tick text")
        .style("opacity", "0")
      if(type === 'gridx' || type === 'gridy') {
        // hide domain in grids
        axisDom.selectAll(".axis .domain")
          .style("opacity", "0")
      }
    }

    return axisDom.node().toReact();
  }
}
