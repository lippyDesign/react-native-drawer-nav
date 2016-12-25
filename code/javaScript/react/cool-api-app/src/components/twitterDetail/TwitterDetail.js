import React from 'react';

const VideoDetail = ({ text, user, entities, favorite_count, retweet_count }) => {
    return <div className="twitter-detail">
        <ul>
            <li className="inlineLi">
                <a target="_blank" href={`https://twitter.com/${user.screen_name}`}>
                    <img className="twitter_profile_pic" src={user.profile_image_url_https} alt='profile image' />
                </a>
            </li>
            <li className="inlineLi">
                <a className="twitterUsername" target="_blank" href={`https://twitter.com/${user.screen_name}`}>
                    {user.screen_name}
                </a>
            </li>
                {entities.media ? entities.media.map(item => <li key={item.id} className="mediaImageWrapper"><img className="mediaImage" src={item.media_url_https} alt='tweet image' /></li>) : ''}
            <li className="twitterTextWrapper">
                {text}
            </li>
            <li>
                <i className="fa fa-heart" aria-hidden="true"></i> <small>{favorite_count}</small>
            </li>
            <li>
                <i className="fa fa-twitter" aria-hidden="true"></i> <small>{retweet_count}</small>
            </li>
        </ul>
    </div>;
}

export default VideoDetail;