"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  Chart
} from '../../index.jsx';

require('./css/container_update.css')

class UpdateSvg extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    var title = "test chart lib"
    var i = 0;

    window.setInterval(() => {

      i++;

      if(i % 2 == 0) {
        var title_new = `${title} ${i}`;
        var svg_width = this.state.width + 10;
      }else{
        var title_new = `${title} ${i - 1}`;
        var svg_width = this.state.width
      }

      this._updateState(title_new, svg_width)
    }, 2000)
  }

  _updateState(title, width) {
    this.setState({
      title: title,
      width: width
    })
  }

  render() {

    return (
      <Chart {...this.state} />
    )
  }
}


(() => {

  const width = 200,
    height = 500,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

  var title = "test chart lib"


  React.render(
    <UpdateSvg
      title= {title}
      width= {width}
      height= {height}
      margins= {margins}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
    />
  , document.getElementById('blank-container_update'))


})()
