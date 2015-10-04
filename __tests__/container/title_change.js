"use strict";

var React = require('react');
var Title = require('../../lib/container/title.js');

var ChangeTitle = React.createClass({
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
    var title = this.props.title;
    var titleClassName = this.props.titleClassName;

    var expend = this.state.expend;

    title = expend? (title + '1'): title;
    titleClassName = expend? (titleClassName + '1'): titleClassName;

    return (
      <Title
        title= {title}
        titleClassName= {titleClassName}
        onClick={this._onClick}>
      </Title>
    )
  }
})

module.exports = ChangeTitle;
