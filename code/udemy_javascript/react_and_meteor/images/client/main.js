import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/image_list'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentWillMount() {
        // great place to load data because componentWillMount only runs once
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => this.setState({images: response.data.data}));
    }

    render() {
        return (
            <div>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

Meteor.startup( ()=> {
    ReactDOM.render(<App/>, document.querySelector('.container'));
});
