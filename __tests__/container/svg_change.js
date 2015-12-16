"use strict";

var React = require('react');
var Svg = require('../../lib/container/svg.js');

var ClickSvg = React.createClass({
  getInitialState: function() {
    return {
      expend: false
    }
  },
  _onClick: function() {
    this.setState({
      expend: !this.state.expend
    })
  },
  render: function() {
    var width = this.props.width;
    var height = this.props.height;
    var className = this.props.svgClassName;
    var margins = this.props.margins;
    var id = this.props.id;

    var expend = this.state.expend;
    var top = margins.top;

    width = expend? (width + 100): width;
    height = expend? (height + 100): height;
    className = expend? (className + '1'): className;
    id = expend? (id + '1'): id;

    var newMargins= expend? ({top: 30, right: 50, bottom: 20, left: 50}): margins;

    return (
      <Svg
        width={width}
        height={height}
        svgClassName={className}
        id={id}
        margins={newMargins}
        onClick={this._onClick}>
      </Svg>
    )
  }
})

module.exports = ClickSvg;
