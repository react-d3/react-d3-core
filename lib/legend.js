"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Selection = require('d3-selection');

var _d3Selection2 = _interopRequireDefault(_d3Selection);

var _d3Scale = require('d3-scale');

var _d3Scale2 = _interopRequireDefault(_d3Scale);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_Component) {
  _inherits(Legend, _Component);

  function Legend(props) {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));
  }

  _createClass(Legend, [{
    key: '_radius',
    value: function _radius(swatchShape) {
      return swatchShape === 'circle' ? 18 : 0;
    }
  }, {
    key: '_series',
    value: function _series(props) {
      var chartSeries = props.chartSeries,
          categoricalColors = props.categoricalColors;


      var colors = categoricalColors || _d3Scale2.default.scaleCategory10();

      return chartSeries.map(function (_ref, i) {
        var name = _ref.name,
            color = _ref.color,
            field = _ref.field;
        return {
          color: color || colors(i),
          name: name || field,
          field: field
        };
      });
    }
  }, {
    key: '_mkLegend',
    value: function _mkLegend(dom) {
      var _props = this.props,
          legendClassName = _props.legendClassName,
          backgroundColor = _props.backgroundColor,
          legendPosition = _props.legendPosition,
          legendOffset = _props.legendOffset,
          swatchShape = _props.swatchShape,
          chartSeries = _props.chartSeries,
          margins = _props.margins,
          width = _props.width;


      var legendArea = _d3Selection2.default.select(dom);
      var series = this._series(this.props);
      var radius = this._radius(swatchShape);

      // make legends
      var legend = legendArea.selectAll('div').data(series).enter().append("div").attr("class", legendClassName + ' legend').style("height", 20).style("padding", 5).style("background-color", backgroundColor).style("display", "inline-block");

      var rect = legend.append("div").style("width", 18).style("height", 18).style("border-radius", radius).style("background-color", function (d) {
        return d.color;
      }).style("float", legendPosition);

      var text = legend.append("div").style("padding-left", 5).style("padding-right", 5).text(function (d) {
        return d.name;
      }).style("float", legendPosition);

      return legendArea;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          legendClassName = _props2.legendClassName,
          width = _props2.width,
          height = _props2.height;


      var legendGroup = _reactFauxDom2.default.createElement('div');
      var legendClasses = legendClassName + ' legend';

      legendGroup.setAttribute('class', legendClasses);
      legendGroup.style.width = width;
      legendGroup.style.textAlign = 'center';

      return this._mkLegend(legendGroup).node().toReact();
    }
  }]);

  return Legend;
}(_react.Component);

Legend.defaultProps = _extends({
  backgroundColor: '#FFF',
  legendHeight: 50,
  legendPosition: 'left',
  legendOffset: 90,
  legendClassName: 'react-d3-core__legend',
  swatchShape: 'square'
}, _commonProps2.default);
Legend.propTypes = {
  backgroundColor: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  chartSeries: _react.PropTypes.array.isRequired,
  legendOffset: _react.PropTypes.number.isRequired,
  legendClassName: _react.PropTypes.string.isRequired,
  legendPosition: _react.PropTypes.oneOf(['left', 'right']).isRequired,
  swatchShape: _react.PropTypes.oneOf(['circle', 'square'])
};
exports.default = Legend;