	import React, { Component } from 'react';
	import axios from 'axios';
	import {Button} from 'react-bootstrap';
	import {Table} from 'react-bootstrap';
	class SupplierComponent extends Component{
		state={
			suppliers: []
		}
		suppliers:[]
		componentDidMount(){axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => {
			const suppliers= res.data;
			this.setState({suppliers});
			this.setSuppliers({suppliers});
			console.log("suppliers:" + this.state.suppliers);
		})
	}
	 getSuppliers(){
		return this.suppliers;
	}
	render(){
		console.log(this.suppliers);
		return(
			<Table responsive>
				<thead>
				<tr>
				<th>#</th>
				<th>Table heading</th>
				<th>Table heading</th>
				<th>Table heading</th>
				<th>Table heading</th>
				<th>Table heading</th>
				<th>Table heading</th>
				</tr>
				</thead>
			{ this.state.suppliers.map(person => (<tbody><tr><td>{person.name}</td></tr></tbody>))}
				</Table>
				)
		}
	}
	export default SupplierComponent;
