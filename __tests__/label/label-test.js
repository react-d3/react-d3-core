import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const d3 = require('d3');
const expect = require('expect');
const Label = require('../../lib/axis/label');
const data = require('json!../data/user_sample.json');
const common = require('../../lib/commonProps');

const defaultProps = Object.assign(common, {
  hTransform: 'rotate(0)',
  vTransform: 'rotate(270)',
  labelTitle: 'label title',
  labelPosition: 'bottom',
  labelOffset: 40,
  textAnchor: 'middle',
  labelClassName: 'react-d3-core__label'
})

describe('Label', () => {

  it('Create label with default values, in bottom position', () => {

    var newGroup = TestUtils.renderIntoDocument(
      <Label/>
    );

    var fixWidth = defaultProps.width - defaultProps.margins.left - defaultProps.margins.right;
    var dom = ReactDOM.findDOMNode(newGroup)

    expect(dom.getAttribute('transform')).toEqual(defaultProps.hTransform)
    expect(+dom.getAttribute('y')).toEqual(+defaultProps.labelOffset)
    expect(+dom.getAttribute('x')).toEqual(+fixWidth / 2)
    expect(dom.style['text-anchor']).toEqual(defaultProps.textAnchor)
    expect(dom.textContent).toEqual(defaultProps.labelTitle)
  })

  it('Create label in top position', () => {
    var newGroup = TestUtils.renderIntoDocument(
      <Label
        labelPosition= {'top'}
      />
    );

    var fixWidth = defaultProps.width - defaultProps.margins.left - defaultProps.margins.right;
    var dom = ReactDOM.findDOMNode(newGroup)

    expect(dom.getAttribute('transform')).toEqual(defaultProps.hTransform)
    expect(+dom.getAttribute('y')).toEqual(-defaultProps.labelOffset)
    expect(+dom.getAttribute('x')).toEqual(+fixWidth / 2)
    expect(dom.style['text-anchor']).toEqual(defaultProps.textAnchor)
    expect(dom.textContent).toEqual(defaultProps.labelTitle)
  })

  it('Create label in left position', () => {
    var newGroup = TestUtils.renderIntoDocument(
      <Label
        labelPosition= {'left'}
      />
    );

    var fixHeight = defaultProps.height - defaultProps.margins.top - defaultProps.margins.bottom;
    var dom = ReactDOM.findDOMNode(newGroup)

    expect(dom.getAttribute('transform')).toEqual(defaultProps.vTransform)
    expect(+dom.getAttribute('y')).toEqual(-defaultProps.labelOffset)
    expect(+dom.getAttribute('x')).toEqual(-fixHeight / 2)
    expect(dom.style['text-anchor']).toEqual(defaultProps.textAnchor)
    expect(dom.textContent).toEqual(defaultProps.labelTitle)
  })

  it('Create label in right position', () => {
    var newGroup = TestUtils.renderIntoDocument(
      <Label
        labelPosition= {'right'}
      />
    );

    var fixHeight = defaultProps.height - defaultProps.margins.top - defaultProps.margins.bottom;
    var dom = ReactDOM.findDOMNode(newGroup)

    expect(dom.getAttribute('transform')).toEqual(defaultProps.vTransform)
    expect(+dom.getAttribute('y')).toEqual(+defaultProps.labelOffset)
    expect(+dom.getAttribute('x')).toEqual(-fixHeight / 2)
    expect(dom.style['text-anchor']).toEqual(defaultProps.textAnchor)
    expect(dom.textContent).toEqual(defaultProps.labelTitle)
  })

  it('Create label and with customize className', () => {
    var newGroup = TestUtils.renderIntoDocument(
      <Label
        labelClassName= {'test-label'}
      />
    );

    var dom = ReactDOM.findDOMNode(newGroup)

    expect(dom.getAttribute('class')).toEqual('test-label label')
  })
})
