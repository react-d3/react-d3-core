"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _scale = require('../utils/scale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartSvg = function (_Component) {
  _inherits(ChartSvg, _Component);

  function ChartSvg(props) {
    _classCallCheck(this, ChartSvg);

    return _possibleConstructorReturn(this, (ChartSvg.__proto__ || Object.getPrototypeOf(ChartSvg)).call(this, props));
  }

  _createClass(ChartSvg, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          margins = _props.margins,
          svgClassName = _props.svgClassName,
          id = _props.id,
          children = _props.children;


      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

      return _react2.default.createElement(
        'svg',
        {
          height: height,
          width: width,
          className: svgClassName,
          id: id,
          ref: 'svgContainer'
        },
        _react2.default.createElement(
          'g',
          {
            transform: t
          },
          children
        )
      );
    }
  }]);

  return ChartSvg;
}(_react.Component);

ChartSvg.defaultProps = _extends({
  svgClassName: 'react-d3-core__container_svg',
  onZoom: function onZoom() {},
  scaleExtent: [1, 10]
}, _commonProps2.default);
ChartSvg.propTypes = {
  id: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  svgClassName: _react.PropTypes.string.isRequired
};
exports.default = ChartSvg;