"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as CommonProps,
} from './commonProps';

export default class Legend extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
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

  componentDidMount () {
    this._mkLegend(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // check when to rebuild axis and update states
    const keys = [
      'width',
      'height',
      'margins',
      'legendClassName',
      'legendOffset',
      'legendPosition',
      'chartSeries'
    ];

    keys.forEach((k) => {
      if(this.props[k] !== nextProps[k]) {
        d3.select(React.findDOMNode(this.refs.legendArea))
          .html('')
        this._mkLegend(nextProps);
      }
    })
  }

  _mkLegend(props) {
    const {
      width,
      margins,
      chartSeries,
      legendClassName,
      legendPosition,
      legendOffset
    } = props;

    var legendArea = d3.select(React.findDOMNode(this.refs.legendArea))
      .selectAll('g');
    // make legends
    var legend = legendArea
      .data(chartSeries)
    .enter().append("g")
      .attr("class", `${legendClassName} legend`);

    var bgRect = legend.append("rect")
      .attr("y", -4)
      .attr("width", 220)
      .attr("height", 20)
      .style("fill", "#EEE")
      .style("fill-opacity", 0.3);

    var rect = legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (d) => { return d.color; });

    var text = legend.append("text")
      .attr("y", 9)
      .attr("dy", ".35em")
      .text((d) => {
        if(d.name.length > 20)
          return `${d.name.substring(0, 20)}...`;
        else
          return d.name;
      });

    if(legendPosition === 'right') {
      legend.attr("transform", (d, i) => { return `translate(${width - margins.right - legendOffset}, ${margins.top + i * 20})`; });
      rect.attr("x", -18)
      text.attr("x", -24)
        .style("text-anchor", "end")
      bgRect.attr("x", -200)
    }else if(legendPosition === 'left') {
      legend.attr("transform", (d, i) => { return `translate(${margins.left + legendOffset}, ${margins.top + i * 20})`; });
      rect.attr("x", 0)
      text.attr("x", 24)
        .style("text-anchor", "start")
      bgRect.attr("x", -20)
    }
  }

  render() {
    return (
      <g
        ref= "legendArea"
        >
      </g>
    )
  }
}
