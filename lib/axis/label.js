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

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label(props) {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, props));
  }

  _createClass(Label, [{
    key: '_mkLabel',
    value: function _mkLabel(dom) {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          margins = _props.margins,
          labelOffset = _props.labelOffset,
          labelTitle = _props.labelTitle,
          labelPosition = _props.labelPosition,
          vTransform = _props.vTransform,
          hTransform = _props.hTransform,
          textAnchor = _props.textAnchor;


      var labelDom = _d3Selection2.default.select(dom);
      var fixWidth = width - margins.left - margins.right;
      var fixHeight = height - margins.top - margins.bottom;

      if (labelPosition === 'top') {

        labelDom.attr('transform', hTransform).attr('y', -labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'bottom') {

        labelDom.attr('transform', hTransform).attr('y', +labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'left') {

        labelDom.attr('transform', vTransform).attr('y', -labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
      } else if (labelPosition === 'right') {

        labelDom.attr('transform', vTransform).attr('y', +labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
      }

      return labelDom;
    }
  }, {
    key: 'render',
    value: function render() {
      var labelClassName = this.props.labelClassName;


      var labelText = _reactFauxDom2.default.createElement('text');
      var labelClasses = labelClassName + ' label';
      labelText.setAttribute('class', labelClasses);

      var labelDom = this._mkLabel(labelText);

      return labelDom.node().toReact();
    }
  }]);

  return Label;
}(_react.Component);

Label.defaultProps = _extends({
  hTransform: 'rotate(0)',
  vTransform: 'rotate(270)',
  labelTitle: 'label title',
  labelPosition: 'bottom',
  labelOffset: 40,
  textAnchor: 'middle',
  labelClassName: 'react-d3-core__label'
}, _commonProps2.default);
Label.propTypes = {
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  hTransform: _react.PropTypes.string,
  vTransform: _react.PropTypes.string,
  labelTitle: _react.PropTypes.string,
  labelPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  labelOffset: _react.PropTypes.number,
  textAnchor: _react.PropTypes.string,
  labelClassName: _react.PropTypes.string
};
exports.default = Label;