import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {

  render() {
    let dimage = '';
    dimage = (
      <img className="responsive-img" src="http://placehold.it/350x150"/>
    )
    return (
      <div className="card postPadding">
            <ul className="postInfo">
                <li><a href="#"><img className="circle" src="http://placehold.it/48x48"/></a></li>
                <li><a href="#">Profile</a></li>
                <li>Occupation</li>
                <li>Location</li>
                <li>Age</li>
              </ul>
            <div className="card-image waves-effect waves-block waves-light">
              {dimage}
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Card Title<i className="fa fa-ellipsis-v right" aria-hidden="true"></i></span>
            </div>
            <div className="card-reveal">
              <p>An hour ago</p>
              <span className="card-title grey-text text-darken-4">Card Title<i className="fa fa-sort-desc right" aria-hidden="true"></i></span>
              <ul className="">
                <li><a href="#">Report post</a></li>
                <li><a href="#">Hide this post</a></li>
                <li><a href="#">Like ---user---</a></li>
                <li><a href="#">Message user</a></li>
              </ul>
            </div>
              <ul className="postInfo center-align">
                <li><a href="#" id="one"><i className="fa fa-eye-slash fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="two"><i className="fa fa-thumbs-down fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="three"><i className="fa fa-frown-o fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="four"><i className="fa fa-meh-o fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="five"><i className="fa fa-smile-o fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="six"><i className="fa fa-thumbs-up fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="seven"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="eight"><i className="fa fa-bomb fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="#" id="nine"><i className="fa fa-fire fa-2x" aria-hidden="true"></i></a></li>
              </ul>
          </div>
    );
  }
}
