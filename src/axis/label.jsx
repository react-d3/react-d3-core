"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as CommonProps,
} from '../commonProps';

export default class Label extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    hTransform: 'rotate(0)',
    vTransform: 'rotate(270)',
    labelTitle: 'label title',
    labelPosition: 'bottom',
    labelOffset: 35,
    textAnchor: 'end',
    labelClassName: 'react-d3-core__label'
  })

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    hTransform: PropTypes.string,
    vTransform: PropTypes.string,
    labelTitle: PropTypes.string,
    labelPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    labelOffset: PropTypes.number,
    textAnchor: PropTypes.string,
    labelClassName: PropTypes.string
  }

  componentDidMount () {
    this._mkLabel(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // check when to rebuild label and update states
    const keys = [
      'width',
      'height',
      'margins',
      'hTransform',
      'vTransform',
      'textAnchor',
      'labelTitle',
      'labelPosition',
      'labelOffset',
      'labelClassName'
    ];

    keys.forEach((k) => {
      if(this.props[k] !== nextProps[k]) {
        this._mkLabel(nextProps);
      }
    })
  }

  _mkLabel(props) {
    const {
      height,
      width,
      marigns,
      labelOffset,
      labelTitle,
      labelPosition,
      vTransform,
      hTransform,
      textAnchor
    } = props;

    var labelDom = d3.select(React.findDOMNode(this.refs.labelAxis))

    if (labelPosition === 'top') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', -labelOffset)
        .attr('x', width / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'bottom') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', +labelOffset)
        .attr('x', width / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'left') {

      labelDom
        .attr('transform', vTransform)
        .attr('y', -labelOffset)
        .attr('x', -height / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'right') {
      labelDom
        .attr('transform', vTransform)
        .attr('y', +labelOffset)
        .attr('x', -height / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)
    }
  }

  render() {
    return (
      <text
        ref="labelAxis"
        >

      </text>
    )
  }
}
