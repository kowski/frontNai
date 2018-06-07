import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import ProductComponent from './Components/ProductComponent';
import SupplierComponent from './Components/SupplierComponent';
import CreateSupplierComponent from './Components/CreateSupplierComponent';
import EditSupplierComponent from './Components/EditSupplierComponent';
import Master from './Components/Master';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Master/>
      <Route exact path="/product" component={ProductComponent}/>
      <Route exact path="/supplier" component={SupplierComponent}/>
      <Route exact path="/createsupplier" component={CreateSupplierComponent}/>
      <Route exact path="/supplier/edit/:id" component={EditSupplierComponent}/>
      </div>
      </Router>
      );
    }
  }

  export default App;
