import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import App from './components/app';
import reducers from './reducers';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAToT3fCuAT3_6WC5jxRjn_fd6pJ4Hv7SY';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
	return <div>
			<SearchBar/>
		</div>
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
