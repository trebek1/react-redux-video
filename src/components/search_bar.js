import React, {Component} from 'react'; 

// class based can have added functionality 
// only class based components have state, functional do not 

class SearchBar extends Component {
// new instance created -> call constructor 
	constructor(props){

		// call it on Component (paren
		// now this.props is defined due to passing props to super
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this); 
	}
	
	onInputChange(event){
		console.log(event.target.value)
		this.setState({term: event.target.value})
	}

	render () {
		return <div>

		<input 
		value = {this.state.term}
		onChange={this.onInputChange} />
		Value of input : {this.state.term}
		</div>
	}
}

//functional component, no added functionality dumb component
// const SearchBar = () => {
// 	return <input />
// }

export default SearchBar; 