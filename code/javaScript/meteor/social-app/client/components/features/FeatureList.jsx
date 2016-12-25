import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FeatureList extends Component {
    
    getSocialFeatures() {
        return ([
            {key: 1, icon: "fa fa-globe fa-2x", bigtext: "Socialize", littletext: "Share your plans with the world. Attach photos of what you are doing at the moment. Easily communicate and form connections quickly."},
        ])
    }
    
    getPrivateFeatures() {
        return ([
            {key: 4, icon: "fa fa-lock fa-2x", bigtext: "Privacy", littletext: "Easily become undiscoverable. Filter the users that can access your profile. Leave no footsteps when visiting other profiles."},
        ])
    }
    
    render() {
        var rowsSocial = this.getSocialFeatures().map( (feature)=> {
            return (
                <li key={feature.key} className="listStyleTypeNone">
                    <h3 className="">
                        <i className={feature.icon}></i>
                        <strong> {feature.bigtext}</strong>
                    </h3>
                    <h3>
                        <small> {feature.littletext}</small>
                    </h3>
                </li>
            )
        })
        var rowsPrivate = this.getPrivateFeatures().map( (feature)=> {
            return (
                <li key={feature.key} className="listStyleTypeNone">
                    <h3 className="">
                        <i className={feature.icon}></i>
                        <strong> {feature.bigtext}</strong>
                    </h3>
                    <h3>
                        <small> {feature.littletext}</small>
                    </h3>
                </li>
            )
        })
        return (
            <div className="row container center-align">
                <div className="col s12 l6">
                    <ul className="">
                        {rowsSocial}
                    </ul>
                </div>
                <div className="col s12 l6">
                    <ul className="">
                        {rowsPrivate}
                    </ul>
                </div>
            </div>
        )
    }
}