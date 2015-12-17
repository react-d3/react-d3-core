"use strict"

import {
  default as React,
  Component
} from 'react';

import Grid from './grid';

export default class XGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        {...this.props}
        type="x"
      />
    )
  }
}
