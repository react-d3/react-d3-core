import D3Scale from 'd3-scale';

export function scale(props) {
  const {
    type,
    scale,
  } = props;

  var func;

  if(scale === 'linear')
    func = D3Scale.scaleLinear();
  else if(scale === 'identity')
    func = D3Scale.scaleIdentity();
  else if(scale === 'sqrt')
    func = D3Scale.scaleSqrt();
  else if(scale === 'pow')
    func = D3Scale.scalePow();
  else if(scale === 'log')
    func = D3Scale.scaleLog();
  else if(scale === 'quantize')
    func = D3Scale.scaleQuantize();
  else if(scale === 'quantile')
    func = D3Scale.scaleQuantile();
  else if(scale === 'ordinal')
    func = D3Scale.scaleOrdinal()
  else if(scale === 'band')
    func = D3Scale.scaleBand();
  else if(scale === 'time')
    func = D3Scale.scaleTime();
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
    scale,
    bandPaddingInner,
    bandPaddingOuter
  } = props;

  if(range)
    func.range(range)

  if(domain)
    func.domain(domain)

  if(scale === 'band') {

    func
      .round(true)

    if(bandPaddingInner) 
      func.paddingInner(bandPaddingInner)
    else
      func.paddingInner(.1)
      
    if(bandPaddingOuter) 
      func.paddingOuter(bandPaddingOuter)
    else
      func.paddingOuter(.1)
  
  }

  return func;
}
