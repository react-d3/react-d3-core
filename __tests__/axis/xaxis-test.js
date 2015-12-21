import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const d3 = require('d3');
const expect = require('expect');
const Xaxis = require('../../lib/axis/xaxis');
const data = require('json!../data/user_sample.json');
const common = require('../../lib/commonProps');

describe('Axes, set x accessor', () => {

  it('Create xaxis, default orient is bottom, and with default height and margins', () => {
    var x = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Xaxis
        x= {x}
      />
    );

    var height = common.height;
    var margins = common.margins;

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual(`translate(0, ${height - margins.top - margins.bottom})`)
  })

  it('Create xaxis, orient in bottom', () => {
    var x = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Xaxis
        x= {x}
        xOrient= {'bottom'}
      />
    );

    var height = common.height;
    var margins = common.margins;

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual(`translate(0, ${height - margins.top - margins.bottom})`)
  })

  it('Create xaxis, orient in top', () => {
    var x = function(d) { return d.index; }

    var newGroup = TestUtils.renderIntoDocument(
      <Xaxis
        x= {x}
        xOrient= {'top'}
      />
    );

    var dom = ReactDOM.findDOMNode(newGroup)
    expect(dom.getAttribute('transform')).toEqual('translate(0, 0)')
  })
})
