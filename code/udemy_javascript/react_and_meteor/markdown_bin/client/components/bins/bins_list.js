import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import { Bins } from '../../../imports/collections/bins.js';

class BinsList extends Component {

onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
}

renderList() {
    // for the remove function, wrap it in a fat arrow function to bind the proper bin
    return this.props.bins.map( bin => {

        const url = `/bins/${bin._id}`

        return (
            <li className="list-group-item" key={bin._id}>
                <Link to={url}>Bin {bin._id}</Link>
                <span className="pull-right">
                    
                    <button className="btn btn-danger" onClick={ ()=> this.onBinRemove(bin) }>Remove</button>
                </span>
            </li>
        )
    })
}

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default createContainer( ()=> {
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    return {
        bins: Bins.find({}).fetch()
    };
}, BinsList);