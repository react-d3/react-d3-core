jest.dontMock('../lib/chartContainer.js');

import {
  default as React
} from 'react';

import {
  default as TestUtils
} from 'react-addons-test-utils';

const d3 = require('d3');
const ChartContainer = require('../lib/chartContainer');

var width = 960,
  height = 500,
  margins = {top: 20, right: 50, bottom: 20, left: 50},
  id = "test-chart",
  title = "Hello chart",
  svgClassName = "test-chart-class",
  titleClassName = "test-chart-title-class";

describe('Container', () => {

  it('create a new container, include Svg and Title components', () => {
    var newContainer = TestUtils.renderIntoDocument(
      <ChartContainer
        title= {title}
        width= {width}
        height= {height}
        margins= {margins}
        id= {id}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
      />
    );

    var containerDom = TestUtils.findRenderedDOMComponentWithTag(
      newContainer,
      "div"
    );

    expect(containerDom.children.length).toEqual(2);

  })
})
