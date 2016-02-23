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

  static defaultProps = Object.assign(CommonProps, {
    legendHeight: 50,
    legendPosition: 'left',
    legendOffset: 90,
    legendClassName: 'react-d3-core__legend',
    swatchShape: 'square'
  })

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
    var {
      chartSeries,
      categoricalColors
    } = props;

    categoricalColors = categoricalColors || d3.scale.category10();

    var series = chartSeries.map((f, i) => {

      // set a color if not set
      f.color = f.color || categoricalColors(i);

      // set name if not set
      f.name = f.name || f.field;

      return {
        color: f.color,
        name: f.name,
        field: f.field
      }
    })

    return series;
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

    var legendArea = d3.select(dom);
    var series = this._series(this.props);
    var radius = this._radius(swatchShape);

    // make legends
    var legend = legendArea
      .selectAll('div')
      .data(series)
    .enter().append("div")
      .attr("class", `${legendClassName} legend`)
      .style("height", 20)
      .style("padding", 5)
      .style("background-color", '#EEE')
      .style("display", "inline-block");

    var rect = legend.append("div")
      .style("width", 18)
      .style("height", 18)
      .style("border-radius", radius)
      .style("background-color", d => d.color)
      .style("float", legendPosition);

    var text = legend.append("div")
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

    var legendGroup = ReactFauxDOM.createElement('div');
    var legendClasses = `${legendClassName} legend`;

    legendGroup.setAttribute('class', legendClasses);
    legendGroup.style.width = width;
    legendGroup.style.textAlign = 'center';

    var legendDom = this._mkLegend(legendGroup);

    return legendDom
      .node()
      .toReact();
  }
}
