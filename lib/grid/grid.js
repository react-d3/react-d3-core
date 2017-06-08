"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axis = require('../axis/axis');

var _axis2 = _interopRequireDefault(_axis);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          margins = _props.margins,
          type = _props.type,
          gridAxisClassName = _props.gridAxisClassName,
          xBandPaddingInner = _props.xBandPaddingInner,
          xBandPaddingOuter = _props.xBandPaddingOuter,
          x = _props.x,
          xDomain = _props.xDomain,
          xRange = _props.xRange,
          xScale = _props.xScale,
          xGridCount = _props.xGridCount,
          xGridStyleClassName = _props.xGridStyleClassName,
          yBandPaddingInner = _props.yBandPaddingInner,
          yBandPaddingOuter = _props.yBandPaddingOuter,
          y = _props.y,
          yDomain = _props.yDomain,
          yRange = _props.yRange,
          yScale = _props.yScale,
          yGridCount = _props.yGridCount,
          yGridStyleClassName = _props.yGridStyleClassName,
          xTickValues = _props.xTickValues,
          yTickValues = _props.yTickValues;


      var gridAxis;
      var t;

      if (!yRange) {
        yRange = [height - margins.top - margins.bottom, 0];
      }

      if (!xRange) {
        xRange = [0, width - margins.left - margins.right];
      }

      if (type === 'x') {
        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
        var tickSize = height - margins.top - margins.bottom;

        // if grid axis don't pass customize ticks.
        gridAxis = _react2.default.createElement(_axis2.default, {
          height: height,
          width: width,
          margins: margins,
          type: 'gridx',
          showAxis: false,
          gridAxisClassName: gridAxisClassName,
          bandPaddingInner: xBandPaddingInner,
          bandPaddingOuter: xBandPaddingOuter,
          tickOrient: 'bottom',
          orient: 'bottom',
          tickSizeOuter: 0,
          tickPadding: 10,
          tickFormat: null,
          tickSizeInner: -tickSize,
          proxy: x,
          domain: xDomain,
          range: xRange,
          scale: xScale,
          ticks: xGridCount,
          gridStyleClassName: xGridStyleClassName,
          tickValues: xTickValues
        });
      } else if (type === 'y') {
        t = 'translate(0, 0)';
        var tickSize = width - margins.left - margins.right;

        // if grid axis don't pass customize ticks.
        gridAxis = _react2.default.createElement(_axis2.default, {
          height: height,
          width: width,
          margins: margins,
          type: 'gridy',
          showAxis: false,
          gridAxisClassName: gridAxisClassName,
          bandPaddingInner: yBandPaddingInner,
          bandPaddingOuter: yBandPaddingOuter,
          tickOrient: 'left',
          orient: 'left',
          tickSizeOuter: 0,
          tickPadding: 10,
          tickSizeInner: -tickSize,
          tickFormat: null,
          proxy: y,
          scale: yScale,
          domain: yDomain,
          range: yRange,
          ticks: yGridCount,
          gridStyleClassName: yGridStyleClassName,
          tickValues: yTickValues
        });
      }

      return _react2.default.createElement(
        'g',
        { transform: t },
        gridAxis
      );
    }
  }]);

  return Grid;
}(_react.Component);

Grid.defaultProps = _extends({
  type: 'x',
  gridAxisClassName: 'react-d3-core__grid_axis'
}, _commonProps2.default);
Grid.propTypes = {
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  type: _react.PropTypes.oneOf(['x', 'y']).isRequired,
  gridAxisClassName: _react.PropTypes.string,
  x: _react.PropTypes.func,
  xDomain: _react.PropTypes.array,
  xRange: _react.PropTypes.array,
  xScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
  xBandPaddingInner: _react.PropTypes.number,
  xBandPaddingOuter: _react.PropTypes.number,
  y: _react.PropTypes.func,
  yDomain: _react.PropTypes.array,
  yRange: _react.PropTypes.array,
  yScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
  yBandPaddingInner: _react.PropTypes.number,
  yBandPaddingOuter: _react.PropTypes.number,
  xGridCount: _react.PropTypes.array,
  yGridCount: _react.PropTypes.array,
  xGridStyleClassName: _react.PropTypes.string,
  yGridStyleClassName: _react.PropTypes.string,
  xTickValues: _react.PropTypes.array
};
exports.default = Grid;