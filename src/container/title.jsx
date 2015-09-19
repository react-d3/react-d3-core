"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class ChartTitle extends Component {
  constructor(props) {
    super (props);
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
      fontSize: '2em'
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
