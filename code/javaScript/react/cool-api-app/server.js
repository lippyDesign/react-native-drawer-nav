const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});
///////////////////////////////////////////////////////////////////

console.log('Starting twitter')

const Twit = require('twit');
const twitterConfig = require('./twitterConfig');
const T = new Twit(twitterConfig);
const params = {
    q: 'e OR t OR n OR o OR a OR i OR r OR s OR h OR l OR d OR c OR f OR u OR m OR y OR g OR p OR b OR v OR w OR k OR q OR j OR x OR z OR 0 OR 1 OR 2 OR 3 OR 4 OR 5 OR 6 OR 7 OR 8 OR 9 since:2011-07-11',
    count: 6,
    lang: 'en',
    result_type: 'popular',
    tweet_mode: 'extended'
}

var twitter;

function gotData(err, data, response) {
    if (err) {
        console.log(err)
    }
    if (data) {
        //console.log(data)
        twitter = data;
    }
  //return data;
}
T.get('search/tweets', params, gotData);

app.get('/twitter', function(req, res) {
  res.json({ twitter })
})
///////////////////////////////////////////////////////////////////
app.listen(port);
console.log('server started');