import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const d3 = require('d3');
const expect = require('expect');
const Yaxis = require('../../lib/axis/yaxis');
const data = require('json!../data/user_sample.json');
const common = require('../../lib/commonProps');

describe('Axes, set y accessor', () => {

  it('Create yaxis, default orient is left, and with default height and margins', () => {
    var y = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Yaxis
        y= {y}
      />
    );

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual('translate(0, 0)')
  })

  it('Create yaxis, orient in left', () => {
    var y = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Yaxis
        y= {y}
        yOrient= {"left"}
      />
    );

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual('translate(0, 0)')
  })

  it('Create yaxis, orient in right', () => {
    var y = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Yaxis
        y= {y}
        yOrient= {'right'}
      />
    );

    var width = common.width;
    var margins = common.margins;

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual(`translate(${width - margins.right - margins.left}, 0)`)
  })


})
