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

		this.onInputChange = this.onInputChange.bind(this)
		//this.submit = this.submit.bind(this)
		// I think the callbacks really weird in es6 
		
		
	}
	
	onInputChange (event){
		this.setState({term: event.target.value});
	}

	submit (event) {
		event.preventDefault();
		this.props.onSearchTermChange(this.state.term); 
		this.setState({term: ''});
	}

	render () {
		return (
			<div className="search-bar">
				<form onSubmit={(event) => this.submit(event)}>
					<input 
						value={this.state.term}
						onChange={this.onInputChange} 
						/>
				</form>
			</div>
			)
	}
	
}

//functional component, no added functionality dumb component
// const SearchBar = () => {
// 	return <input />
// }

export default SearchBar; 