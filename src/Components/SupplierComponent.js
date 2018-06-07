import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import '../SupplierComponent.css';
class SupplierComponent extends Component {
	state = {
		suppliers: [],
		id: '',
	}
	componentDidMount() {
		axios.get('http://localhost:8080/supplier')
			.then(res => {
				const suppliers = res.data;
				this.setState({ suppliers });
				console.log("suppliers:" + this.state.suppliers);
			})
	}

	delete(id) {
		return (
			<form className="deleteBtSupplier" onSubmit={this.deleteSupplier(id)}>
				<Button type="submit" bsStyle="danger">Delete</Button> 
					<Redirect to={'/supplier'} />  
			</form > 
			
		);
	}
	edit(id) {
		var path="/supplier/edit/".concat(id);
		return (
			<Link to={path}><Button bsStyle="info">Edit</Button></Link>
		)
	}
	deleteSupplier = (param) => (event) => {
		console.log(param);
		event.preventDefault();
		axios.delete('http://localhost:8080/supplier/'.concat(param)).then(res => {
			console.log(res); 
		})
		window.location.reload()

	}
	getSuppliers() {
		return this.suppliers;
	}
	createSupplierBtt() {
		return (
			<form id="createSupplierBtt" className="text-right">
				<Link to="/createsupplier">Create supplier</Link>
			</form>
		)
	}
	render() {
		console.log(this.state.suppliers);
		return (
			<div>
				<h2>Suppliers:</h2>
				{this.createSupplierBtt()}
				<Table responsive>
					<thead>
						<tr>
							<th>ID</th>
							<th>Company name</th>
							<th>City</th>
							<th>Phone number</th>
							<th></th>
						</tr>
					</thead>
					{this.state.suppliers.map(person => (<tbody><tr><td>{person.id}</td><td>{person.company_name}</td><td>{person.city}</td><td>{person.contact_number}</td><td>{this.edit(person.id)} {this.delete(person.id)}	</td></tr></tbody>))}
				</Table>
			</div>
		)
	}
}
export default SupplierComponent;
