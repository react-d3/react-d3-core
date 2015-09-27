export function scale(props) {
  const {
    type,
    scale,
  } = props;

  var func;

  if(scale === 'linear')
    func = d3.scale.linear();
  else if(scale === 'identity')
    func = d3.scale.identity();
  else if(scale === 'sqrt')
    func = d3.scale.sqrt();
  else if(scale === 'pow')
    func = d3.scale.pow();
  else if(scale === 'log')
    func = d3.scale.log();
  else if(scale === 'quantize')
    func = d3.scale.quantize();
  else if(scale === 'quantile')
    func = d3.scale.quantile();
  else if(scale === 'ordinal')
    func = d3.scale.ordinal();
  else if(scale === 'time')
    func = d3.time.scale();
  else
    new Error(`Please check your axis scale setting. "${scale}" scale is invalid. `)

  func = _mkScaleSettings(props, func);

  return func;
}

function _mkScaleSettings(props, func) {
  const {
    type,
    range,
    domain,
    rangeRoundBands
  } = props;

  if(range)
    func.range(range)

  if(domain)
    func.domain(domain)

  if(rangeRoundBands) {
    const {interval, padding, outerPadding} = rangeRoundBands;

    if(padding && outerPadding)
      func.rangeRoundBands(interval, padding, outerPadding)
    else if(padding)
      func.rangeRoundBands(interval, padding)
    else
      func.rangeRoundBands(interval)
  }

  return func;
}
