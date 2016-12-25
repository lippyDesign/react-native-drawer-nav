import React from 'react';

const VideoDetail = ({video, stats}) => {
    const url = `https://www.youtube.com/embed/${video.id}`;
    return <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <ul>
            <li><i className="fa fa-eye" aria-hidden="true"></i>: {stats.statistics.viewCount}</li>
            <li><i className="fa fa-thumbs-up" aria-hidden="true"></i>: {stats.statistics.likeCount}</li>
            <li><i className="fa fa-thumbs-down" aria-hidden="true"></i>: {stats.statistics.dislikeCount}</li>
            <li><i className="fa fa-comment" aria-hidden="true"></i>: {stats.statistics.commentCount}</li>
        </ul>
    </div>;
}

export default VideoDetail;