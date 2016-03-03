import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'

export default class ContainerExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		const route = this.props.routes[1].path || 'container'

		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/example">
				        React-d3 core
				      </a>
				    </div>
				  </div>
				</nav>
				<div style={{marginTop: '50px', padding: '30px'}}>
					<Nav bsStyle="pills" justified activeKey={route}>
	          <NavItem eventKey="container" href="/example/container">Chart Container</NavItem>
	          <NavItem eventKey="grid" href="/example/grid">Grid</NavItem>
	          <NavItem eventKey="label" href="/example/label">Label</NavItem>
	          <NavItem eventKey="legend" href="/example/legend">Legend</NavItem>
	          <NavItem eventKey="xaxis" href="/example/xaxis">Xaixs</NavItem>
	          <NavItem eventKey="yaxis" href="/example/yaxis">Yaixs</NavItem>
	        </Nav>
	      </div>
				{this.props.children}
			</div>
		)
	}
}