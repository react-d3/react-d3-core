"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as CommonProps,
} from '../commonProps';

export default class ChartSvg extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = Object.assign(CommonProps, {
    svgClassName: 'react-d3-core__container_svg',
    id: `react-d3-core__container_svg__${Math.floor(Math.random() * 100000)}`,
    onZoom: () => {}
  })

  static propTypes = {
    id: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    svgClassName: PropTypes.string.isRequired,
  }

  componentDidMount() {
    var {
      xScaleSet,
      yScaleSet,
      onZoom
    } = this.props;

    var zoom = d3.behavior.zoom()
      .x(xScaleSet)
      .y(yScaleSet)
      .scaleExtent([1, 10])
      .on("zoom", () => { onZoom.call(this, xScaleSet, yScaleSet) });

    d3.select(React.findDOMNode(this.refs.svgContainer))
      .call(zoom);
  }

  render() {
    const {
      height,
      width,
      margins,
      svgClassName,
      id,
      children
    } = this.props;

    var t = "translate(" + margins.left + "," + margins.top + ")"

    return (
      <svg
        height = {height}
        width = {width}
        className = {svgClassName}
        id = {id}
        ref = "svgContainer"
      >
        <g
          transform = {t}
        >
          {children}
        </g>
      </svg>
    )
  }
}
