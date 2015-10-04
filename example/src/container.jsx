"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  Chart as Chart,
} from '../../src/index.jsx';

(() => {

  const width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

  var title = "test chart lib"

  React.render(
    <Chart
      title= {title}
      width= {width}
      height= {height}
      margins= {margins}
      id= {id}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
    />
  , document.getElementById('blank-container'))

})()
