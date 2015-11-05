export function xDomain(props) {
  const {
    data,
    x,
    xScale,
    xDomain
  } = props;

  if(xDomain)
    return xDomain;

  if(xScale === 'ordinal') {
    return data.map((d) => { return x(d); });
  }else {
    return d3.extent(data, (d) => { return x(d); });
  }
}
