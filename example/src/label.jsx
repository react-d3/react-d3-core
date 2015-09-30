"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  Label as Label
} from '../../src/index';

(() => {

  const width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    labelTitle = 'new label title'


  React.render(
    <svg width={width} height={height}>
      <Label
        width= {width}
        height= {height}
        margins= {margins}
        labelTitle= {labelTitle}
        labelPosition= {labelPosition}
      />
    </svg>
  , document.getElementById('blank-label')
  )
})()
