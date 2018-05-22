import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom'
import '../SupplierComponent.css';

const Master = (props) => {
  return (
   <div className="container main_panel">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            </div>
            <ul className="nav">
              <li className="li_block"><Link to="/">Home</Link></li> 
              <li className="li_block"><Link to="/product">Products</Link></li> 
              <li className="li_block"><Link to="/supplier">Suppliers</Link></li>
            </ul>
          </div>
      </nav> 
      </div>
  )
};export default Master;