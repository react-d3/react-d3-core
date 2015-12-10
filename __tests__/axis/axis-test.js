jest.dontMock('../../lib/axis/xaxis.js');
// jest.dontMock('./svg_change');

import {
  default as React
} from 'react';

import {
  default as TestUtils
} from 'react-addons-test-utils';

const d3 = require('d3');
const Xaxis = require('../../lib/axis/xaxis');
// const SvgClick = require('./svg_change');


describe('Axes', () => {

  it('Create xaxis', () => {
    var newSvg = TestUtils.renderIntoDocument(
      <svg width={960} height={500}>
        <Xaxis
          x= {x}
          xDomain= {xDomain}
          xRangeRoundBands= {xRangeRoundBands}
          xScale= {xScale}
          xLabel = {xLabel}
        />
      </svg>
    );

    var gDom = TestUtils.findRenderedDOMComponentWithTag(
      newSvg,
      "g"
    );

    console.log(gDom)
    // expect(svgDom.id).toEqual(id);
    // expect(+svgDom.getAttribute('width')).toEqual(width);
    // expect(+svgDom.getAttribute('height')).toEqual(height);
    // expect(gDom.getAttribute('transform')).toEqual('translate(' + margins.left + ', ' + margins.top + ')');

  })

  // it('change attributes (width, height, transform, class, id) when click', () => {
  //
  //   var clickSvg = TestUtils.renderIntoDocument(
  //     <SvgClick
  //       width= {width}
  //       height= {height}
  //       margins= {margins}
  //       id= {id}
  //       svgClassName= {svgClassName}
  //       >
  //     </SvgClick>
  //   );
  //
  //   var svgDom = TestUtils.findRenderedDOMComponentWithClass(
  //     clickSvg,
  //     "test-chart-class"
  //   );
  //
  //   var gDom = TestUtils.findRenderedDOMComponentWithTag(
  //     clickSvg,
  //     "g"
  //   );
  //
  //   clickSvg._onClick();
  //
  //   expect(svgDom.id).toEqual(id + '1');
  //   expect(+svgDom.getAttribute('width')).toEqual(width + 100);
  //   expect(+svgDom.getAttribute('height')).toEqual(height + 100);
  //   expect(gDom.getAttribute('transform')).toEqual('translate(' + margins.left + ', ' + (+margins.top + 10) + ')');
  // })
  //
  // it('svg with children', () => {
  //
  //   var childrenSvg = TestUtils.renderIntoDocument(
  //     <Svg
  //       width= {width}
  //       height= {height}
  //       margins= {margins}
  //       id= {id}
  //       svgClassName= {svgClassName}
  //       >
  //       <rect height={100} width={100} className={'test-rect'}/>
  //     </Svg>
  //   );
  //
  //   var rectDom = TestUtils.findRenderedDOMComponentWithClass(
  //     childrenSvg,
  //     "test-rect"
  //   );
  //
  //   expect(+rectDom.getAttribute('width')).toEqual(100);
  //   expect(+rectDom.getAttribute('height')).toEqual(100);
  // })
})
