'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xDomain = xDomain;

var _d3Array = require('d3-array');

var _d3Array2 = _interopRequireDefault(_d3Array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function xDomain(props, stack, horizonal) {
  var data = props.data,
      chartSeries = props.chartSeries,
      x = props.x,
      xScale = props.xScale,
      xDomain = props.xDomain;


  if (xDomain) return xDomain;

  if (!horizonal) {
    if (xScale === 'ordinal') {
      return data.map(function (d) {
        return x(d);
      });
    } else {
      return _d3Array2.default.extent(data, function (d) {
        return x(d);
      });
    }
  } else {
    if (stack) {
      // stack
      var max = 0;
      var min = 0;

      data.forEach(function (d) {
        var totalTop = 0;
        var totalBottom = 0;

        chartSeries.forEach(function (sd) {
          var field = sd.field;

          if (d[field] > 0) {
            totalTop += x(d[field]);
          } else if (d[field] < 0) {
            totalBottom += x(d[field]);
          }
        });

        if (totalTop > max) max = totalTop;
        if (totalBottom < min) min = totalBottom;
      });

      return [min, max];
    } else {
      // not stack, single
      var domainArr = chartSeries.map(function (d) {
        var field = d.field;
        var extent = _d3Array2.default.extent(data, function (dt) {
          return x(dt[field]);
        });

        return extent;
      });

      return _d3Array2.default.extent([].concat.apply([], domainArr));
    }
  }
}