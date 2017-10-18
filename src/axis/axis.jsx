"use strict";

import {
  default as React,
  Component
} from 'react';

import * as PropTypes from 'prop-types';

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
      tickSizeInner,
      tickSizeOuter,
      ticks,
      tickValues
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

    if(tickValues)
      func.tickValues(tickValues);

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
      axisStyling, //styling object that holds user defined css classes for different axis elements
      gridStyleClassName //css class to style grids on chart
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


    // apply user defined axis path style (path refers to x-axis line)if provided or else default
    if(axisStyling && axisStyling.pathClassName) {
      var axisPath = axisDom.selectAll('.axis path')
      axisPath.attr("class", axisStyling.pathClassName);
    }
    else
      axisDom.selectAll('.axis path')
          .style('fill', 'none')
          .style('stroke', '#000')
          .style('shape-rendering', 'crispEdges')
          .style('display','none')

    // apply user defined style for axis tick line if provided or else default
    if(axisStyling && axisStyling.ticksClassName) {
      var axisLine = axisDom.selectAll('.axis line')
      axisLine.attr("class", axisStyling.ticksClassName);
    }
    else
      axisDom.selectAll('.axis line')
          .style('fill', 'none')
          .style('stroke', '#000')
          .style('shape-rendering', 'crispEdges');

    // apply user defined style for grid axes if provided or else default
    if(gridStyleClassName) {
        var grids = axisDom.selectAll('.grid-axis line')
        grids.attr("class", gridStyleClassName);
    }
    else
        axisDom.selectAll('.grid-axis line')
            .style('opacity', .2)
            .style('fill', 'none')
            .style('stroke', '#000')
            .style('stroke-width', '1.5px')

    // Axis tick labels style
    var axisText = axisDom.selectAll('.axis text')
    if(style) {
      for(var key in style) {
        axisText.style(key, style[key]);
      }
    }
    // user defined style for axis labels
    else if(axisStyling && axisStyling.textClassName) {
      axisText.attr("class", axisStyling.textClassName);
    }

    return axisDom.node().toReact();
  }
}
