import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import '../SupplierComponent.css';
class CreateSupplierComponent extends Component {
	state = {
		company_name: '',
		contact_number: '',
		city: '',
		redirect: false,
	}
	handleSubmit = event => {
		event.preventDefault();
		const supplier = {
			company_name: this.state.company_name,
			contact_number: this.state.contact_number,
			city: this.state.city
		};
		axios.post('http://localhost:8080/supplier', {
			company_name: this.state.company_name,
			contact_number: this.state.contact_number,
			city: this.state.city
		}).then(res => {
			this.setState({ redirect: true });
			console.log(res);
			console.log(res.data);
		})
			.catch(error => {
				console.log(error.response);
			})
	}
	handleNameChange = event => {
		this.setState({ company_name: event.target.value });
	}
	hadnleCityChange = event => {
		this.setState({ city: event.target.value });
	}
	hadnleNumberChange = event => {
		this.setState({ contact_number: event.target.value });
	}
	render() { 
		const { redirect } = this.state
		return (
			<div>
				<h2>Create supplier</h2>
				<Form id="formHorizontalEmail" onSubmit={this.handleSubmit}>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Name:
    				</Col>
						<Col sm={4}>
							<FormControl onChange={this.handleNameChange} name="company_name" type="text" placeholder="name" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							City:
    				</Col>
						<Col sm={4}>
							<FormControl onChange={this.hadnleCityChange} name="city" type="text" placeholder="city" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Contact number:
    				</Col>
						<Col sm={4}>
							<FormControl onChange={this.hadnleNumberChange} name="contact_number" type="text" placeholder="contact" />
						</Col>
					</FormGroup>
					<Button bsStyle="primary" type="submit">Create Supplier</Button>
				</Form>
				{redirect && (
					<Redirect to={'/supplier'} />
				)}
			</div>
		)
	}
} export default CreateSupplierComponent;