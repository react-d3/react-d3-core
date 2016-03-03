"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import D3Selection from 'd3-selection'
import D3Scale from 'd3-scale'
import ReactFauxDOM from 'react-faux-dom';
import CommonProps from './commonProps';

export default class Legend extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps =  {
    backgroundColor: '#FFF',
    legendHeight: 50,
    legendPosition: 'left',
    legendOffset: 90,
    legendClassName: 'react-d3-core__legend',
    swatchShape: 'square',
    ...CommonProps
  }

  static propTypes = {
    backgroundColor: PropTypes.string,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    chartSeries: PropTypes.array.isRequired,
    legendOffset: PropTypes.number.isRequired,
    legendClassName: PropTypes.string.isRequired,
    legendPosition: PropTypes.oneOf(['left', 'right']).isRequired,
    swatchShape: PropTypes.oneOf(['circle', 'square']),
  }

  _radius(swatchShape) {
    return swatchShape === 'circle' ? 18 : 0;
  }

  _series(props) {
    const {
      chartSeries,
      categoricalColors
    } = props;

    const colors = categoricalColors || D3Scale.scaleCategory10();

    return chartSeries.map(({ name, color, field }, i) => ({
      color: color || colors(i),
      name: name || field,
      field,
    }));
  }

  _mkLegend(dom) {
    const {
      legendClassName,
      backgroundColor,
      legendPosition,
      legendOffset,
      swatchShape,
      chartSeries,
      margins,
      width,
    } = this.props;

    const legendArea = D3Selection.select(dom);
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
      .style("background-color", backgroundColor)
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
