import axios from 'axios';

const YOUTUBE_ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';
const YOUTUBE_API_KEY = 'AIzaSyAtp9yitr1g4hPZADmBc2hrhrcEcLrfOS4';
const MAX_SIZE = '&part=snippet&maxResults=6'

/////////////// YOUTUBE ////////////////////////
export const FETCH_YOUTUBE = 'FETCH_YOUTUBE';
export const FETCH_METRICS = 'FETCH_METRICS';

export const fetchYoutube = () => {
    const request = axios.get(`${YOUTUBE_ROOT_URL}?chart=mostPopular&key=${YOUTUBE_API_KEY}${MAX_SIZE}`);
    return {
        type: FETCH_YOUTUBE,
        payload: request
    };
}

export const fetchMetrics = (id) => {
    const request = axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${YOUTUBE_API_KEY}`);
    return {
        type: FETCH_METRICS,
        payload: request
    };
}

/////////////// TWITTER ////////////////////////
export const FETCH_TWITTER = 'FETCH_TWITTER';
export const fetchTwitter = () => {
    const request = axios.get('/twitter');
    return {
        type: FETCH_TWITTER,
        payload: request
    };
}

