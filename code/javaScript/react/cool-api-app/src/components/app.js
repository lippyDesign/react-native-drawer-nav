import React, { Component } from 'react';

import Twitter from '../containers/twitter/Twitter'
import Youtube from '../containers/youtube/Youtube';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>TRENDING NOW</h1>
        <h2>Here are today's most popular topics on social media</h2>
        <section>
          <Twitter />
        </section>
        <section>
          <Youtube />
        </section>
      </div>
    );
  }
}
