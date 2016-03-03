"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import D3Selection from 'd3-selection'
import ReactFauxDOM from 'react-faux-dom';
import CommonProps from '../commonProps';

export default class Label extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    hTransform: 'rotate(0)',
    vTransform: 'rotate(270)',
    labelTitle: 'label title',
    labelPosition: 'bottom',
    labelOffset: 40,
    textAnchor: 'middle',
    labelClassName: 'react-d3-core__label',
    ...CommonProps
  }

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

  _mkLabel(dom) {
    const {
      height,
      width,
      margins,
      labelOffset,
      labelTitle,
      labelPosition,
      vTransform,
      hTransform,
      textAnchor
    } = this.props;

    var labelDom = D3Selection.select(dom);
    var fixWidth = width - margins.left - margins.right;
    var fixHeight = height - margins.top - margins.bottom;

    if (labelPosition === 'top') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', -labelOffset)
        .attr('x', fixWidth / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'bottom') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', +labelOffset)
        .attr('x', fixWidth / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'left') {

      labelDom
        .attr('transform', vTransform)
        .attr('y', -labelOffset)
        .attr('x', -fixHeight / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'right') {

      labelDom
        .attr('transform', vTransform)
        .attr('y', +labelOffset)
        .attr('x', -fixHeight / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)
    }

    return labelDom;
  }

  render() {
    const {
      labelClassName
    } = this.props;

    var labelText = ReactFauxDOM.createElement('text');
    var labelClasses = `${labelClassName} label`;
    labelText.setAttribute('class', labelClasses);

    var labelDom = this._mkLabel(labelText);

    return labelDom.node().toReact();
  }
}
