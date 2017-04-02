import React, { Component } from 'react';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Index from './Index.component';

class App extends Component{
	render(){
		return (
			<BrowserRouter>
				<Route path='/' component={Index} />
			</BrowserRouter>
		);
	}
}

module.exports = App;
