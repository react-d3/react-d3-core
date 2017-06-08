"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Axis = require('d3-axis');

var _d3Axis2 = _interopRequireDefault(_d3Axis);

var _d3Selection = require('d3-selection');

var _d3Selection2 = _interopRequireDefault(_d3Selection);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _scale = require('../utils/scale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Axis = function (_Component) {
  _inherits(Axis, _Component);

  function Axis(props) {
    _classCallCheck(this, Axis);

    return _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));
  }

  _createClass(Axis, [{
    key: '_mkTickAxis',
    value: function _mkTickAxis() {
      var _props = this.props,
          type = _props.type,
          tickOrient = _props.tickOrient,
          tickFormat = _props.tickFormat,
          tickPadding = _props.tickPadding,
          tickSizeInner = _props.tickSizeInner,
          tickSizeOuter = _props.tickSizeOuter,
          ticks = _props.ticks,
          tickValues = _props.tickValues;


      var func = _d3Axis2.default;

      if (tickOrient === 'left') {
        func = func.axisLeft(this._mkScale(this.props));
      } else if (tickOrient === 'right') {
        func = func.axisRight(this._mkScale(this.props));
      } else if (tickOrient === 'top') {
        func = func.axisTop(this._mkScale(this.props));
      } else if (tickOrient === 'bottom') {
        func = func.axisBottom(this._mkScale(this.props));
      }

      if (tickFormat) func.tickFormat(tickFormat);

      if (tickPadding) func.tickPadding(tickPadding);

      if (tickSizeOuter) func.tickSizeOuter(tickSizeOuter);

      if (tickSizeInner) func.tickSizeInner(tickSizeInner);

      if (tickValues) func.tickValues(tickValues);

      if (ticks) func.ticks.apply(null, ticks);

      return func;
    }
  }, {
    key: '_mkScale',
    value: function _mkScale() {
      var newScale;

      if (this.props.scale === 'ordinal') newScale = 'band';else newScale = this.props.scale;

      var func = (0, _scale.scale)(Object.assign({}, this.props, { scale: newScale }));

      return func;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          showAxis = _props2.showAxis,
          gridAxisClassName = _props2.gridAxisClassName,
          axisClassName = _props2.axisClassName,
          type = _props2.type,
          style = _props2.style,
          axisStyling = _props2.axisStyling,
          gridStyleClassName = _props2.gridStyleClassName;


      var axisGroup = _reactFauxDom2.default.createElement('g');

      if (type === 'x') var axisClasses = axisClassName + ' axis x';else if (type === 'y') var axisClasses = axisClassName + ' axis y';else if (type === 'gridx' || type === 'gridy') var axisClasses = gridAxisClassName + ' grid-axis';

      axisGroup.setAttribute('class', axisClasses);

      var axisDom = _d3Selection2.default.select(axisGroup);

      axisDom.call(this._mkTickAxis());

      if (!showAxis) {
        axisDom.selectAll(".grid-axis .tick text").style("opacity", "0");

        if (type === 'gridx' || type === 'gridy') {
          // hide domain in grids
          axisDom.selectAll(".grid-axis .domain").style("opacity", "0");
        }
      }

      // apply user defined axis path style (path refers to x-axis line)if provided or else default
      if (axisStyling && axisStyling.pathClassName) {
        var axisPath = axisDom.selectAll('.axis path');
        axisPath.attr("class", axisStyling.pathClassName);
      } else axisDom.selectAll('.axis path').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges').style('display', 'none'

      // apply user defined style for axis tick line if provided or else default
      );if (axisStyling && axisStyling.ticksClassName) {
        var axisLine = axisDom.selectAll('.axis line');
        axisLine.attr("class", axisStyling.ticksClassName);
      } else axisDom.selectAll('.axis line').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges');

      // apply user defined style for grid axes if provided or else default
      if (gridStyleClassName) {
        var grids = axisDom.selectAll('.grid-axis line');
        grids.attr("class", gridStyleClassName);
      } else axisDom.selectAll('.grid-axis line').style('opacity', .2).style('fill', 'none').style('stroke', '#000').style('stroke-width', '1.5px'

      // Axis tick labels style
      );var axisText = axisDom.selectAll('.axis text');
      if (style) {
        for (var key in style) {
          axisText.style(key, style[key]);
        }
      }
      // user defined style for axis labels
      else if (axisStyling && axisStyling.textClassName) {
          axisText.attr("class", axisStyling.textClassName);
        }

      return axisDom.node().toReact();
    }
  }]);

  return Axis;
}(_react.Component);

Axis.defaultProps = {
  range: null,
  rangeRoundBands: null,
  domain: null,
  tickFormat: null,
  tickOrient: null
};
Axis.PropTypes = {
  showAxis: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  orient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  tickOrient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};
exports.default = Axis;