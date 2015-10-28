"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Label = require('../../lib/index').Label;

(function() {

  var labelTitle = 'new label title',
    labelPosition = 'right'


  ReactDOM.render(
    <svg width={960} height={500}>
      <Label
        labelTitle= {labelTitle}
        labelPosition= {labelPosition}
      />
    </svg>
  , document.getElementById('blank-label')
  )
})()
