import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchYoutube, fetchMetrics } from '../../actions';

import VideoDetail from '../../components/videoDetail/VideoDetail';

class Youtube extends Component {

    componentDidMount() {
        this.props.fetchYoutube();
    }

    renderItems() {
        const { videos, youtubeStats } = this.props.youtube;
        return videos.map(video => {
            return <VideoDetail
                video={video}
                key={video.id}
                stats={youtubeStats.find(item => item.id === video.id)}
            />
        });
    }
    getMetrics() {
        this.props.youtube.videos.forEach(video => this.props.fetchMetrics(video.id));
    }

    render() {
        if (this.props.youtube.videos ) {
            if (this.props.youtube.youtubeStats.length === 0) {
                this.getMetrics()
            }
            if (this.props.youtube.youtubeStats.length === this.props.youtube.videos.length) {
                return (
                    <div className="youtube">
                        <h3>YouTube <i className="fa fa-youtube" aria-hidden="true"></i></h3>
                        <h4>Most Popular Videos</h4>
                        <div className="videoDetailWrapper">
                            {this.renderItems()}
                        </div>
                    </div>
                );
            }
        }
        return <div>Loading...</div>
    }
}

const mapStateToProps = ({ youtube }) => ({ youtube });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchYoutube, fetchMetrics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Youtube);