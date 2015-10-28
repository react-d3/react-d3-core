"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as CommonProps,
} from '../commonProps';

export default class ChartTitle extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = Object.assign(CommonProps, {
    titleClassName: 'react-d3-core__container_title',
    title: 'Chart Title'
  })

  static propTypes = {
    width: PropTypes.number.isRequired,
    title: PropTypes.string,
    titleClassName: PropTypes.string
  }

  render() {
    const {
      titleClassName,
      title,
      width,
     } = this.props;

    var titleStyle = {
      width: width,
      textAlign: 'center',
      fontSize: '2em',
      paddingBottom: '1.3em'
    }

    return (
      <div
        style= {titleStyle}
        className={titleClassName}
      >
        {title}
      </div>
    )
  }
}
