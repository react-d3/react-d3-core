export function xDomain(props) {
  const {
    data,
    x,
    xScale
  } = props;

  if(xScale === 'ordinal') {
    return data.map((d) => { return x(d); });
  }else {
    return d3.extent(data, (d) => { return x(d); });
  }
}
