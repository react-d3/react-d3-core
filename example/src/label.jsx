"use strict";

import React, { Component } from 'react'
import {Label} from '../../src'


const labelTitle = 'new label title',
  labelPosition = 'right'

export default class LabelSample extends Component {

  render() {
    return(
      <svg width={960} height={500}>
        <Label
          labelTitle= {labelTitle}
          labelPosition= {labelPosition}
        />
      </svg>
    )
  }
}
