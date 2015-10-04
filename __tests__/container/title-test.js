jest.dontMock('../../lib/container/title.js');
jest.dontMock('./title_change');

import {
  default as React
} from 'react/addons';

const d3 = require('d3');
const Title = require('../../lib/container/title');
const TitleChange = require('./title_change');


var TestUtils = React.addons.TestUtils;
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


    var findDom = titleDom.getDOMNode();

    expect(findDom.textContent).toEqual('test-chart');

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


    var findDom = titleDom.getDOMNode();

    newTitle._onClick();

    expect(findDom.textContent).toEqual('test-chart1');

  })
})
