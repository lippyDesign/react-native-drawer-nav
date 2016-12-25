import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Status extends Component {
  
  render() {
    return (
        <div className="card">
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">{this.props.username} do you have plans?</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light blue darken-2 btn btn-large right">Post</button>
                            <div className="file-field input-field right">
                                <div>
                                    <span><i className="fa fa-camera fa-3x uploadImageButton" aria-hidden="true"></i></span>
                                    <input type="file" multiple onChange={this.props.uploadFile}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}