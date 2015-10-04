jest.dontMock('../../lib/container/svg.js');
jest.dontMock('./svg_change');

import {
  default as React
} from 'react/addons';

const d3 = require('d3');
const Svg = require('../../lib/container/svg');
const SvgClick = require('./svg_change');

var TestUtils = React.addons.TestUtils;
var width = 960,
  height = 500,
  margins = {top: 20, right: 50, bottom: 20, left: 50},
  id = "test-chart",
  svgClassName = "test-chart-class";


describe('SVG', () => {

  it('create a new svg tag, with a group tag', () => {
    var newSvg = TestUtils.renderIntoDocument(
      <Svg
        width= {width}
        height= {height}
        margins= {margins}
        id= {id}
        svgClassName= {svgClassName}
        >
      </Svg>
    );

    var svgDom = TestUtils.findRenderedDOMComponentWithClass(
      newSvg,
      "test-chart-class"
    );

    var gDom = TestUtils.findRenderedDOMComponentWithTag(
      newSvg,
      "g"
    );

    var findDom = svgDom.getDOMNode();
    var findgDom = gDom.getDOMNode();

    expect(findDom.id).toEqual(id);
    expect(+findDom.getAttribute('width')).toEqual(width);
    expect(+findDom.getAttribute('height')).toEqual(height);
    expect(findgDom.getAttribute('transform')).toEqual('translate(' + margins.left + ', ' + margins.top + ')');

  })

  it('change attributes (width, height, transform, class, id) when click', () => {

    var clickSvg = TestUtils.renderIntoDocument(
      <SvgClick
        width= {width}
        height= {height}
        margins= {margins}
        id= {id}
        svgClassName= {svgClassName}
        >
      </SvgClick>
    );

    var svgDom = TestUtils.findRenderedDOMComponentWithClass(
      clickSvg,
      "test-chart-class"
    );

    var gDom = TestUtils.findRenderedDOMComponentWithTag(
      clickSvg,
      "g"
    );

    var findDom = svgDom.getDOMNode();
    var findgDom = gDom.getDOMNode();

    clickSvg._onClick();

    expect(findDom.id).toEqual(id + '1');
    expect(+findDom.getAttribute('width')).toEqual(width + 100);
    expect(+findDom.getAttribute('height')).toEqual(height + 100);
    expect(findgDom.getAttribute('transform')).toEqual('translate(' + margins.left + ', ' + (+margins.top + 10) + ')');
  })

  it('svg with children', () => {

    var childrenSvg = TestUtils.renderIntoDocument(
      <Svg
        width= {width}
        height= {height}
        margins= {margins}
        id= {id}
        svgClassName= {svgClassName}
        >
        <rect height={100} width={100} className={'test-rect'}/>
      </Svg>
    );

    var rectDom = TestUtils.findRenderedDOMComponentWithClass(
      childrenSvg,
      "test-rect"
    );

    var findRectDom = rectDom.getDOMNode();

    expect(+findRectDom.getAttribute('width')).toEqual(100);
    expect(+findRectDom.getAttribute('height')).toEqual(100);
  })
})
