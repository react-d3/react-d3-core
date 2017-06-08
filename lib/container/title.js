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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartTitle = function (_Component) {
  _inherits(ChartTitle, _Component);

  function ChartTitle(props) {
    _classCallCheck(this, ChartTitle);

    return _possibleConstructorReturn(this, (ChartTitle.__proto__ || Object.getPrototypeOf(ChartTitle)).call(this, props));
  }

  _createClass(ChartTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          titleClassName = _props.titleClassName,
          title = _props.title,
          width = _props.width;


      var titleStyle = {
        width: width,
        textAlign: 'center',
        fontSize: '2em',
        paddingBottom: '1.3em'
      };

      return _react2.default.createElement(
        'div',
        {
          style: titleStyle,
          className: titleClassName
        },
        title
      );
    }
  }]);

  return ChartTitle;
}(_react.Component);

ChartTitle.defaultProps = _extends({
  titleClassName: 'react-d3-core__container_title',
  title: ''
}, _commonProps2.default);
ChartTitle.propTypes = {
  width: _react.PropTypes.number.isRequired,
  title: _react.PropTypes.string,
  titleClassName: _react.PropTypes.string
};
exports.default = ChartTitle;