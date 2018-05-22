		import React, { Component } from 'react';
		import axios from 'axios';
		import {Button} from 'react-bootstrap';
		import {Table} from 'react-bootstrap';
		class SupplierComponent extends Component{
			state={
				suppliers: []
			}
		componentDidMount(){axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				const suppliers= res.data;
				this.setState({suppliers});
				console.log("suppliers:" + this.state.suppliers);
			})
		}

		delete(id){
			return(
				<form onSubmit={this.handleSubmit}>
				<Button type="submit" bsStyle="danger">Delete</Button>
				</form>
			);
		}
		edit(id){
			return(
				<Button bsStyle="info">Edit</Button>
			)
		}
		handleSubmit = event =>{
			event.prevenDefault();
			console.log("delete");
		}
		getSuppliers(){
			return this.suppliers;
		}
		createSupplierBtt(){
			return(
				<form id="createSupplierBtt" class="text-right">
				<Button bsStyle="link">Create supplier</Button>
				</form>
			)
		}
		render(){
			console.log(this.suppliers);
			return(
				<div>
				<h2>Suppliers:</h2>
				{this.createSupplierBtt()}
				<Table responsive>
				<thead>
				<tr>
				<th>ID</th>
				<th>#</th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				{ this.state.suppliers.map(person => (<tbody><tr><td>{person.id}</td><td>{person.name}</td><td>{this.edit(person.id)}</td><td>{this.delete(person.id)}	</td></tr></tbody>))}
				</Table>
				</div>
			)
		}
		}
		export default SupplierComponent;
