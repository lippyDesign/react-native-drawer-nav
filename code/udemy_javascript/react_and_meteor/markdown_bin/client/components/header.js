import React, { Component } from 'react';
import { Link , browserHistory} from 'react-router';

import Accounts from './accounts'

class Header extends Component {

    onBinClick(event) {
        event.preventDefault();

        // call back is executed after the insert is complete
        // so in the call back we will direct user to the url of the new bin with the bin's newely created id
        Meteor.call('bins.insert', (error, binId) => {
            browserHistory.push(`/bins/${binId}`);
        });
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">MarkBin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;