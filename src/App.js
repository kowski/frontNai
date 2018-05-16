import React, { Component } from 'react'; 
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import ProductComponent from './Components/ProductComponent';
import SupplierComponent from './Components/SupplierComponent';
import axios from 'axios';

class App extends Component {
  // constructor(){
  //   super();
  //   axios.get('https://api.github.com/users/maecapozzi')
  //   .then(response => console.log(response))

  // }
  render() {
    return ( 
      <Router>
      <div className="container">
      <Route exact path="/product" component={ProductComponent}/>
      <Route exact path="/supplier" component={SupplierComponent}/>
      </div>
      </Router>
      
      );
    }
  }

  export default App;