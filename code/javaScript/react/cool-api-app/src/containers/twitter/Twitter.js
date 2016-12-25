import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTwitter } from '../../actions';

import TwitterDetail from '../../components/twitterDetail/TwitterDetail';

class Twitter extends Component {
    componentDidMount() {
        this.props.fetchTwitter()
    }

    renderItems() {
        const { statuses } = this.props.twitter.tweets.twitter;
        return statuses.map(status => {
            return <TwitterDetail
                text = {status.full_text}
                user = {status.user}
                entities = {status.entities}
                retweet_count = {status.retweet_count}
                favorite_count = {status.favorite_count}
                key={status.id}
            />
        });
    }

    render() {
        if (this.props.twitter.tweets.twitter) {
            return <div className="twitter">
                <h3>Twitter <i className="fa fa-twitter-square" aria-hidden="true"></i></h3>
                <h4>Most Popular Tweets</h4>
                <div className="twitterDetailWrapper">
                    {this.renderItems()}
                </div>
            </div>;
        }
        return <div>Loading</div>
    }
}

function mapStateToProps({ twitter }) {
    return { twitter };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTwitter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);