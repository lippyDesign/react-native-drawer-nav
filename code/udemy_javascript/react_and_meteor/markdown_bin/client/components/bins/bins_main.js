import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import BinsEditor from './bins_editor';
import BinsViwer from './bins_viewer';
import BinsShare from './bins_share';

import { Bins } from '../../../imports/collections/bins';

class BinsMain extends Component {
    render() {
        if (!this.props.bin) {return <div>Loading...</div>}
        return(
            <div>
                <BinsEditor bin={this.props.bin} />
                <BinsViwer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        );
    }
}

export default createContainer( (props) => {
    const { binId } = props.ss;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');
    return { bin: Bins.findOne(binId) };
}, BinsMain);