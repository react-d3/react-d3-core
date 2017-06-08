'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yDomain = yDomain;

var _d3Array = require('d3-array');

var _d3Array2 = _interopRequireDefault(_d3Array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function yDomain(props, stack, horizonal) {
  var data = props.data,
      chartSeries = props.chartSeries,
      y = props.y,
      yDomain = props.yDomain,
      yScale = props.yScale;


  if (yDomain) return yDomain;

  if (!horizonal) {
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
            totalTop += y(d[field]);
          } else if (d[field] < 0) {
            totalBottom += y(d[field]);
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
          return y(dt[field]);
        });

        return extent;
      });

      var extentArr = _d3Array2.default.extent([].concat.apply([], domainArr));

      if (extentArr[0] * extentArr[1] >= 0) {
        return [0, extentArr[1]];
      } else {
        return extentArr;
      }
    }
  } else {
    if (yScale === 'ordinal') {
      return data.map(function (d) {
        return y(d);
      });
    } else {
      return _d3Array2.default.extent(data, function (d) {
        return y(d);
      });
    }
  }
}