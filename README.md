# react-d3-core

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-core.svg)](https://gemnasium.com/react-d3/react-d3-core)

react d3 core components for reusability.

## Install

```
npm install react-d3-core
```

## Introduction

`react-d3-core` is includes the core components of the `react-d3` projects. The reason we extract the main component here, is because of reusability. For instance, we use grid, axes over and over again in line chart, area chart, bar chart ... etc. If we move these system a little bit forward to a react component we can declare it more easily in the future.  

Such as we need xaxis, yaxis, grid in a new chart.  We can install `react-d3-core` and import them.

## LIVE DEMO

http://reactd3.org/docs/core


## Supported Components

#### Container

- [Chart](./docs/container.md)
- [Svg](./docs/svg.md)
- [Title](./docs/title.md)

#### Axis

- [Axis](./docs/axis.md)
- [Xaxis](./docs/xaxis.md)
- [Yaxis](./docs/yaxis.md)

#### Grid

- [xGrid](./docs/xgrid.md)
- [yGrid](./docs/ygrid.md)

#### Label

- [Label](./docs/label.md)

#### Legend

- [Legend](./docs/legend.md)


## Develop

```
$ npm install
$ webpack -w
```


## License

Apache 2.0
