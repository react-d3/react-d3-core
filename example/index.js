import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import Container from './container'

import {default as ChartContainer} from './src/container'
import Grid from './src/grid'
import Label from './src/label'
import Legend from './src/legend'
import Xaxis from './src/xaxis'
import Yaxis from './src/yaxis'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
        

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/example" component={Container}>
      <IndexRedirect to="container"/>
    	<Route path="container" component={ChartContainer}/>
      <Route path="grid" component={Grid}/>
      <Route path="label" component={Label}/>
      <Route path="legend" component={Legend}/>
      <Route path="xaxis" component={Xaxis}/>
      <Route path="yaxis" component={Yaxis}/>
    </Route>
  </Router>
), document.getElementById('root'))