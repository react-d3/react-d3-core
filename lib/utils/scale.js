'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scale = scale;

var _d3Scale = require('d3-scale');

var _d3Scale2 = _interopRequireDefault(_d3Scale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scale(props) {
  var type = props.type,
      scale = props.scale;


  var func;

  if (scale === 'linear') func = _d3Scale2.default.scaleLinear();else if (scale === 'identity') func = _d3Scale2.default.scaleIdentity();else if (scale === 'sqrt') func = _d3Scale2.default.scaleSqrt();else if (scale === 'pow') func = _d3Scale2.default.scalePow();else if (scale === 'log') func = _d3Scale2.default.scaleLog();else if (scale === 'quantize') func = _d3Scale2.default.scaleQuantize();else if (scale === 'quantile') func = _d3Scale2.default.scaleQuantile();else if (scale === 'ordinal') func = _d3Scale2.default.scaleOrdinal();else if (scale === 'band') func = _d3Scale2.default.scaleBand();else if (scale === 'time') func = _d3Scale2.default.scaleTime();else new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. ');

  func = _mkScaleSettings(props, func);

  return func;
}

function _mkScaleSettings(props, func) {
  var type = props.type,
      range = props.range,
      domain = props.domain,
      scale = props.scale,
      bandPaddingInner = props.bandPaddingInner,
      bandPaddingOuter = props.bandPaddingOuter;


  if (range) func.range(range);

  if (domain) func.domain(domain);

  if (scale === 'band') {

    func.round(true);

    if (bandPaddingInner) func.paddingInner(bandPaddingInner);else func.paddingInner(.1);

    if (bandPaddingOuter) func.paddingOuter(bandPaddingOuter);else func.paddingOuter(.1);
  }

  return func;
}