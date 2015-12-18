// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
//
// const d3 = require('d3');
// const expect = require('expect');
// const Legend = require('../../lib/legend');
// const data = require('json!../data/user_sample.json');
// const common = require('../../lib/commonProps');
//
// const defaultProps = Object.assign(common, {
//   legendHeight: 50,
//   legendPosition: 'left',
//   legendOffset: 90,
//   legendClassName: 'react-d3-core__legend'
// })
//
// describe('Legend', () => {
//
//   it('Create legend with default values', () => {
//     var newGroup = TestUtils.renderIntoDocument(
//       <Legend/>
//     );
//
//     var fixWidth = defaultProps.width - defaultProps.margins.left - defaultProps.margins.right;
//     var dom = ReactDOM.findDOMNode(newGroup)
//
//     expect(dom.getAttribute('transform')).toEqual(defaultProps.hTransform)
//     expect(+dom.getAttribute('y')).toEqual(+defaultProps.labelOffset)
//     expect(+dom.getAttribute('x')).toEqual(+fixWidth / 2)
//     expect(dom.style['text-anchor']).toEqual(defaultProps.textAnchor)
//     expect(dom.textContent).toEqual(defaultProps.labelTitle)
//   })
// })
