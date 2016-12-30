import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyBrj2yij27EKGYN6xbS59_LC0Po9r1QL6M',
			authDomain: 'simple-notebook.firebaseapp.com',
			databaseURL: 'https://simple-notebook.firebaseio.com',
			storageBucket: 'simple-notebook.appspot.com',
			messagingSenderId: '411645323933'
		};

		firebase.initializeApp(config);

		const user = firebase.auth().currentUser;

        if (user) {
            console.log(user)
        } else {
            console.log('no user')
        }
	}

	render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
