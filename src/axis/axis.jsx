"use strict";

import {
  default as React,
  Component,
  PropTypes
} from 'react';

import {
  scale as scale
} from '../utils/scale';

export default class Axis extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    setScale: (type, func) => {},
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

  componentDidMount() {
    this._mkAxis(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // check when to rebuild axis and update states
    const keys = [
      'type',
      'showAxis',
      'scale',
      'range',
      'domain',
      'range',
      'rangeRoundBands',
      'tickOrient',
      'tickFormat',
      'tickPadding',
      'innerTickSize',
      'outerTickSize',
      'ticks'
    ]

    keys.forEach((k) => {
      if(this.props[k] !== nextProps[k]) {
        this._mkAxis(nextProps);
      }
    })
  }

  _mkAxis(props) {
    const {
      showAxis,
      type
    } = props;

    var axisDom = d3.select(React.findDOMNode(this.refs.axisGroup))

    axisDom.call(this._mkTickAxis(props));

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

  _mkTickAxis (props) {
    const {
      type,
      tickOrient,
      tickFormat,
      tickPadding,
      innerTickSize,
      outerTickSize,
      ticks,
    } = props;

    var func = d3.svg.axis();

    func.scale(this._mkScale(props));

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

  _mkScale (props) {

    const{
      type
    } = props;

    var func = scale(props);

    if(type === 'x' || type === 'y') {
      // if x, y set scale, not grid
      this.props.setScale(type, func);
    }

    return func;
  }

  render () {
    const {
      gridAxisClassName,
      axisClassName,
      type
    } = this.props;

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
