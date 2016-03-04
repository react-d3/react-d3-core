import D3Array from 'd3-array'

export function yDomain(props, stack, horizonal) {
  const {
    data,
    chartSeries,
    y,
    yDomain,
    yScale
  } = props;

  if(yDomain)
    return yDomain;

  if(!horizonal) {
    if(stack) {
      // stack
      var max = 0;
      var min = 0;

      data.forEach((d) => {
        var totalTop = 0;
        var totalBottom = 0;

        chartSeries.forEach((sd) => {
          var field = sd.field;

          if(d[field] > 0) {
            totalTop += y(d[field]);
          }else if (d[field] < 0) {
            totalBottom += y(d[field]);
          }
        })

        if(totalTop > max) max = totalTop;
        if(totalBottom < min) min = totalBottom;
      })

      return [min, max];
    }else {
      // not stack, single
      var domainArr = chartSeries.map((d) => {
        var field = d.field;
        var extent = D3Array.extent(data, (dt) => { return y(dt[field]); });

        return extent;
      })

      var extentArr = D3Array.extent([].concat.apply([], domainArr))

      if(extentArr[0] * extentArr[1] >= 0) {
        return [0, extentArr[1]]
      }else {
        return extentArr
      }
    }
  }else {
    if(yScale === 'ordinal') {
      return data.map((d) => { return y(d); });
    }else {
      return D3Array.extent(data, (d) => { return y(d); });
    }
  }
}
