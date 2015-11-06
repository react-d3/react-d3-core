"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as d3
} from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

import {
  default as CommonProps,
} from './commonProps';

export default class Legend extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    legendHeight: 50,
    legendPosition: 'left',
    legendOffset: 90,
    legendClassName: 'react-d3-core__legend'
  })

  static propTypes = {
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    chartSeries: PropTypes.array.isRequired,
    legendOffset: PropTypes.number.isRequired,
    legendClassName: PropTypes.string.isRequired,
    legendPosition: PropTypes.oneOf(['left', 'right']).isRequired,
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
      legendOffset
    } = this.props;

    var legendArea = d3.select(dom);
    var series = this._series(this.props);

    // make legends
    var legend = legendArea
      .selectAll('div')
      .data(series)
    .enter().append("div")
      .attr("class", `${legendClassName} legend`)
      .style("width", 120)
      .style("height", 30)
      .style("padding", 5)
      .style("background-color", '#EEE')
      .style("display", "inline-block");

    var rect = legend.append("div")
      .style("width", 18)
      .style("height", 18)
      .style("background-color", (d) => { return d.color; })
      .style("float", legendPosition);

    var text = legend.append("div")
      .style("width", 92)
      .style("padding-left", 5)
      .style("padding-right", 5)
      .text((d) => {
        return d.name;
      })
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
    legendGroup.style.height = height;
    legendGroup.style.textAlign = 'center';

    var legendDom = this._mkLegend(legendGroup);

    return legendDom.node().toReact();
  }
}
