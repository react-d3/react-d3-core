# react-d3-core

react d3 core components for reusability.

## Introduction

`react-d3-core` is includes the core components of the `react-d3` projects. The reason we extract the main component here, is because of reusability. For instance, we use grid, axes over and over again in line chart, area chart, bar chart ... etc. If we move these system a little bit forward to a react component we can declare it more easily in the future.  

Such as we need xaxis, yaxis, grid in a new chart.  We can install `react-d3-core` and import them.

```js

import {
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Grid as Grid,
} from 'react-d3-core';

export default class NewChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Chart {...this.props} >
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
        <Grid {...this.props} />
      </Chart>
      )
  }
}

```

## Supported Components

- Chart
- Axis
- Xaxis
- Yaxis
- Label
- Legend
- Grid

## License

MIT
