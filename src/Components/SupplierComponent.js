		import React, { Component } from 'react';
		import axios from 'axios';
		import {Button} from 'react-bootstrap';
		import {Table} from 'react-bootstrap';
		function Delete(id){
			return(
				<form onSubmit="">
				<input type="text hidden" name="id" />
				<Button type="submit" bsStyle="danger">Delete</Button>
				</form>
			);
		}
		function Edit(id){
			return(
				<Button bsStyle="info">Edit</Button>
			)
		}
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
		handleSubmit = event =>{
			event.prevenDefault();
			console.log("delete");
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
				<th>#</th>
				</tr>
				</thead>
				{ this.state.suppliers.map(person => (<tbody><tr><td>{person.name}</td><Delete/><Edit/></tr></tbody>))}
				</Table>
			)
		}
		}
		export default SupplierComponent;
