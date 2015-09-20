"use strict";

import {
  default as React,
  Component,
} from 'react';

require('../css/axis.css');

export default class Axis extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {showAxis, type} = this.props;

    var axisDom = d3.select(React.findDOMNode(this.refs.axisGroup))

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
  }


  _mkTickAxis () {
    const {
      type,
      initAxis,
      orient,
      tickOrient,
      tickFormat,
      tickPadding,
      innerTickSize,
      outerTickSize,
      ticks,
      height,
      width,
      margins
    } = this.props;

    var func = initAxis;

    func.scale(this._mkScale());

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
    const {
      type,
      scale,
    } = this.props;

    var func;

    if(scale === 'linear')
      func = d3.scale.linear();
    else if(scale === 'identity')
      func = d3.scale.identity();
    else if(scale === 'sqrt')
      func = d3.scale.sqrt();
    else if(scale === 'pow')
      func = d3.scale.pow();
    else if(scale === 'log')
      func = d3.scale.log();
    else if(scale === 'quantize')
      func = d3.scale.quantize();
    else if(scale === 'quantile')
      func = d3.scale.quantile();
    else if(scale === 'ordinal')
      func = d3.scale.ordinal();
    else if(scale === 'time')
      func = d3.time.scale();
    else
      new Error(`Please check your axis scale setting. "${scale}" scale is invalid. `)

    func = this._mkScaleSettings(func);

    if(type === 'x' || type === 'y') {
      // if x, y set scale, not grid
      this.props.setScale(type, func);
    }

    return func;
  }

  _mkScaleSettings(func) {

    const {
      type,
      range,
      domain,
      rangeRoundBands
    } = this.props;

    if(range)
      func.range(range)

    if(domain)
      func.domain(domain)

    if(rangeRoundBands) {
      const {interval, padding, outerPadding} = rangeRoundBands;

      if(padding && outerPadding)
        func.rangeRoundBands(interval, padding, outerPadding)
      else if(padding)
        func.rangeRoundBands(interval, padding)
      else
        func.rangeRoundBands(interval)
    }

    return func;
  }



  render () {
    const {gridAxisClassName, axisClassName, t, type} = this.props;

    if(type === 'x')
      var axisClasses = `${axisClassName} axis x`
    else if(type === 'y')
      var axisClasses = `${axisClassName} axis y`
    else if(type === 'gridx' || type === 'gridy')
      var axisClasses = `${gridAxisClassName} grid-axis axis`

    return (
      <g
        className = {axisClasses}
        ref = 'axisGroup'
      ></g>
    )
  }
}

Axis.defaultProps = {
  initAxis: d3.svg.axis(),
  setScale: (type, func) => {},
  range: null,
  rangeRoundBands: null,
  domain: null,
  tickFormat: null,
  tickOrient: null
};
