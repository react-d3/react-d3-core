"use strict";

var React = require('react');
var Label = require('../../lib/index').Label;

(function() {

  var width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    labelTitle = 'new label title',
    labelPosition = 'right'


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
