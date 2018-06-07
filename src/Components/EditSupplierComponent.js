import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import '../SupplierComponent.css';
class EditSupplierComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier: [],
            isLoading: true,
            id: '',
            company_name: '',
            contact_number: '',
            city: '',
        }
    }
    componentWillMount() {
        this.renderData();
    }

    renderData() {
        axios.get('http://localhost:8080/supplier/'.concat(this.props.match.params.id))
            .then(res => {
                const supplier = res.data;
                this.setState({ supplier });
                this.setState({ isLoading: false });
                console.log(this.state);
                console.log(res.data.id)
                this.setState({ id: res.data.id }); 
                this.setState({ company_name: res.data.company_name }); 
                this.setState({ contact_number: res.data.contact_number }); 
                this.setState({ city: res.data.city }); 
            })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.company_name);
        axios.put('http://localhost:8080/supplier', {
            id:this.state.id,
            company_name: this.state.company_name,
            contact_number: this.state.contact_number,
            city: this.state.city
        }).then(res => {
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
        if (this.state.isLoading) {
            return (
                <p>Loading</p>
            )
        }
        return (
            <div>
                <h2>Update supplier</h2>
                <Form id="formHorizontalEmail" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name:
    				</Col>
                        <Col sm={4}>
                            <FormControl defaultValue={this.state.supplier.company_name} onChange={this.handleNameChange} name="company_name" type="text" placeholder="name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            City:
    				</Col>
                        <Col sm={4}>
                            <FormControl defaultValue={this.state.supplier.city} onChange={this.hadnleCityChange} name="city" type="text" placeholder="city" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Contact number:
    				</Col>
                        <Col sm={4}>
                            <FormControl defaultValue={this.state.supplier.contact_number} onChange={this.hadnleNumberChange} name="contact_number" type="text" placeholder="contact" />
                        </Col>
                    </FormGroup>
                    <Button bsStyle="primary" type="submit">Update Supplier</Button>
                </Form>
            </div>
        )

    }
} export default EditSupplierComponent;