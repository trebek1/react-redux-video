import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import App from './components/app';
import reducers from './reducers';

import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAToT3fCuAT3_6WC5jxRjn_fd6pJ4Hv7SY';


//const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
	constructor (props){
		
		super(props);

		var _this = this; 
		
		this.state = {videos: []}; 

		YTSearch({key: API_KEY, term: 'robotron'}, function(videos){
			_this.setState({videos})
		});

	}
	render(){
		return(
			<div>
				<SearchBar/>
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos = {this.state.videos} />
			</div>	
		) 
	}
}

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  //</Provider>
  , document.querySelector('.container'));
