import d3 from 'd3';

export function xDomain(props, stack, horizonal) {
  const {
    data,
    chartSeries,
    x,
    xScale,
    xDomain
  } = props;

  if(xDomain)
    return xDomain;

  if(!horizonal) {
    if(xScale === 'ordinal') {
      return data.map((d) => { return x(d); });
    }else {
      return d3.extent(data, (d) => { return x(d); });
    }
  }else {
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
            totalTop += x(d[field]);
          }else if (d[field] < 0) {
            totalBottom += x(d[field]);
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
        var extent = d3.extent(data, (dt) => { return x(dt[field]); });

        return extent;
      })

      return d3.extent([].concat.apply([], domainArr));
    }
  }
}
