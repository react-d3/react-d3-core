import {
  default as React
} from 'react';

import {
  default as TestUtils
} from 'react-addons-test-utils';

const d3 = require('d3');
const expect = require('expect');
const Title = require('../../lib/container/title');
const TitleChange = require('./title_change');

var title = "test-chart",
  titleClassName = "test-chart-class";


describe('Title', () => {

  it('create a new title', () => {
    var newTitle = TestUtils.renderIntoDocument(
      <Title
        title= {title}
        titleClassName= {titleClassName}
        />
    );

    var titleDom = TestUtils.findRenderedDOMComponentWithClass(
      newTitle,
      "test-chart-class"
    );

    expect(titleDom.textContent).toEqual('test-chart');

  })

  it('Change title', () => {

    var newTitle = TestUtils.renderIntoDocument(
      <TitleChange
        title= {title}
        titleClassName= {titleClassName}
        />
    );

    var titleDom = TestUtils.findRenderedDOMComponentWithClass(
      newTitle,
      "test-chart-class"
    );

    newTitle._onClick();

    expect(titleDom.textContent).toEqual('test-chart1');

  })
})
