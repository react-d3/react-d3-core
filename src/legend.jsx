"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import CommonProps from './commonProps';

export default class Legend extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps =  {
    legendHeight: 50,
    legendPosition: 'left',
    legendOffset: 90,
    legendClassName: 'react-d3-core__legend',
    swatchShape: 'square',
    ...CommonProps,
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    chartSeries: PropTypes.array.isRequired,
    legendOffset: PropTypes.number.isRequired,
    legendClassName: PropTypes.string.isRequired,
    legendPosition: PropTypes.oneOf(['left', 'right']).isRequired,
    swatchShape: PropTypes.oneOf(['circle', 'square']),
  }

  _radius(swatchShape) {
    return swatchShape === 'circle'
      ? 18
      : 0;
  }

  _series(props) {
    const {
      chartSeries,
      categoricalColors
    } = props;

    const colors = categoricalColors || d3.scale.category10();

    return chartSeries.map(({ name, color, field }, i) => ({
      color: color || colors(i),
      name: name || field,
      field,
    }));
  }

  _mkLegend(dom) {
    const {
      width,
      margins,
      chartSeries,
      legendClassName,
      legendPosition,
      legendOffset,
      swatchShape,
    } = this.props;

    const legendArea = d3.select(dom);
    const series = this._series(this.props);
    const radius = this._radius(swatchShape);

    // make legends
    const legend = legendArea
      .selectAll('div')
      .data(series)
    .enter().append("div")
      .attr("class", `${legendClassName} legend`)
      .style("height", 20)
      .style("padding", 5)
      .style("background-color", '#EEE')
      .style("display", "inline-block");

    const rect = legend.append("div")
      .style("width", 18)
      .style("height", 18)
      .style("border-radius", radius)
      .style("background-color", d => d.color)
      .style("float", legendPosition);

    const text = legend.append("div")
      .style("padding-left", 5)
      .style("padding-right", 5)
      .text(d => d.name)
      .style("float", legendPosition);

    return legendArea;
  }

  render() {
    const {
      legendClassName,
      width,
      height
    } = this.props;

    const legendGroup = ReactFauxDOM.createElement('div');
    const legendClasses = `${legendClassName} legend`;

    legendGroup.setAttribute('class', legendClasses);
    legendGroup.style.width = width;
    legendGroup.style.textAlign = 'center';

    return this
      ._mkLegend(legendGroup)
      .node()
      .toReact();

  }
}
