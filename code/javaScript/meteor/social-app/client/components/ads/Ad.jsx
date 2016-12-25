import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {

  render() {
        let adImage = this.props.ad.image ? <p><img src={this.props.ad.image} alt="image"/></p> : '';
    return (
      <div className="card adPadding">
          <h5>{this.props.ad.title}</h5>
          {adImage}
          <p>{this.props.ad.text}</p>
      </div>
    )
  }
}
