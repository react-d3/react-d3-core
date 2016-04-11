"use strict";

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import D3Axis from 'd3-axis';
import D3Selection from 'd3-selection'
import ReactFauxDOM from 'react-faux-dom';
import {scale} from '../utils/scale';

export default class Axis extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    range: null,
    rangeRoundBands: null,
    domain: null,
    tickFormat: null,
    tickOrient: null,
    tickExclude: []
  }

  static PropTypes = {
    showAxis: PropTypes.bool,
    type: PropTypes.string,
    orient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tickOrient: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tickExclude: PropTypes.array
  }

  _mkTickAxis () {
    const {
      type,
      tickOrient,
      tickFormat,
      tickPadding,
      tickSizeInner,
      tickSizeOuter,
      ticks,
    } = this.props;

    var func = D3Axis;


    if(tickOrient === 'left') {
      func = func.axisLeft(this._mkScale(this.props));
    }else if (tickOrient === 'right') {
      func = func.axisRight(this._mkScale(this.props))
    }else if (tickOrient === 'top') {
      func = func.axisTop(this._mkScale(this.props))
    }else if (tickOrient === 'bottom') {
      func = func.axisBottom(this._mkScale(this.props))
    }

    if(tickFormat)
      func.tickFormat(tickFormat);

    if(tickPadding)
      func.tickPadding(tickPadding);

    if(tickSizeOuter)
      func.tickSizeOuter(tickSizeOuter);

    if(tickSizeInner)
      func.tickSizeInner(tickSizeInner);

    if(ticks)
      func.ticks.apply(null, ticks);

    return func;

  }

  _mkScale () {
    var newScale

    if(this.props.scale === 'ordinal')
      newScale = 'band'
    else
      newScale = this.props.scale

    var func = scale(Object.assign({}, this.props, {scale: newScale}));

    return func;
  }

  render () {

    const {
      showAxis,
      gridAxisClassName,
      axisClassName,
      type,
      style,
      tickExclude
    } = this.props;

    var axisGroup = ReactFauxDOM.createElement('g');

    if(type === 'x')
      var axisClasses = `${axisClassName} axis x`
    else if(type === 'y')
      var axisClasses = `${axisClassName} axis y`
    else if(type === 'gridx' || type === 'gridy')
      var axisClasses = `${gridAxisClassName} grid-axis`

    axisGroup.setAttribute('class', axisClasses);

    var axisDom = D3Selection.select(axisGroup);

    axisDom.call(this._mkTickAxis());

    if(!showAxis) {
      axisDom.selectAll(".grid-axis .tick text")
        .style("opacity", "0")

      if(type === 'gridx' || type === 'gridy') {
        // hide domain in grids
        axisDom.selectAll(".grid-axis .domain")
          .style("opacity", "0")
      }
    }

    // basic styles
    axisDom.selectAll('.axis path')
      .style('fill', 'none')
      .style('stroke', '#000')
      .style('shape-rendering', 'crispEdges');

    axisDom.selectAll('.axis line')
      .style('fill', 'none')
      .style('stroke', '#000')
      .style('shape-rendering', 'crispEdges');

    axisDom.selectAll('.grid-axis line')
      .style('opacity', .2)
      .style('fill', 'none')
      .style('stroke', '#000')
      .style('stroke-width', '1.5px')

    axisDom.selectAll('.axis path')
      .style('display', 'none')

    // Hide the specified ticks
    axisDom.selectAll('.axis .tick')
      .style('display', d => tickExclude.indexOf(d) > -1 ? 'none' : 'auto');

    var axisText = axisDom.selectAll('.axis text')

    if(style) {
      for(var key in style) {
        axisText.style(key, style[key]);
      }
    }

    return axisDom.node().toReact();
  }
}
