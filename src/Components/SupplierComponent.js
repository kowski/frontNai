import React, { Component } from 'react'; 
import axios from 'axios';

class SupplierComponent extends Component{
	state={
		suppliers: []
	}

	componentDidMount(){     axios.get('https://jsonplaceholder.typicode.com/users')
	.then(res => {
		const suppliers= res.data;
		this.setState({suppliers});
		console.log("suppliers:" + this.state);
	})
}
render(){ 
	return(
		 
		<ul>
        { this.state.suppliers.map(person => <li>{person.name}</li>)}
     	</ul>


		)
	}
}
export default SupplierComponent;