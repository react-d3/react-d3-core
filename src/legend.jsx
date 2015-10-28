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

    // make legends
    var legend = legendArea
      .selectAll('div')
      .data(chartSeries)
    .enter().append("div")
      .attr("class", `${legendClassName} legend`)
      .style("width", 120)
      .style("height", 30)
      .style("padding", 5)
      .style("float", legendPosition);

    var rect = legend.append("div")
      .style("width", 18)
      .style("height", 18)
      .style("background-color", (d) => { return d.color; })
      .style("float", legendPosition);

    var text = legend.append("span")
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
      legendClassName
    } = this.props;

    var legendGroup = ReactFauxDOM.createElement('div');
    var legendClasses = `${legendClassName} legend`;

    legendGroup.setAttribute('class', legendClasses);

    var legendDom = this._mkLegend(legendGroup);

    return legendDom.node().toReact();
  }
}
