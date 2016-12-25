import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AgeRange extends Component {
    
    render() {
        // establish CSS classes for highlighting
        let all_ages = '';
        let age18to20 = '';
        let age21to25 = '';
        let age26to30 = '';
        let age31to35 = '';
        let age36to40 = '';
        let age41to50 = '';
        let age51to60 = '';
        let age61to70 = '';
        let age71to80 = '';
        let age81to100 = '';
        let age100 = '';
        // If the distance range state of parent container (Match Settings) is '', meaning we failed to get distance data from servers,
        // we are going to get the distance data from another variable in parent container.
        // else (if the distance range state of parent container (Match Settings) is not '', meaning we have data, we are just going to use that data)
        if (this.props.age === '') {
            let age_selector = this.props.age_selector
            switch (age_selector)
            {
               case 'All': all_ages = "activeBorder"
               break;
               case '18to20': age18to20 = "activeBorder"
               break;
               case '21to25': age21to25 = "activeBorder";
               break;
               case '26to30': age26to30 = "activeBorder";
               break;
               case '31to35': age31to35 = "activeBorder";
               break;
               case '36to40': age36to40 = "activeBorder";
               break;
               case '41to50': age41to50 = "activeBorder";
               break;
               case '51to60': age51to60 = "activeBorder";
               break;
               case '61to70': age61to70 = "activeBorder";
               break;
               case '71to80': age71to80 = "activeBorder";
               break;
               case '81to100': age81to100 = "activeBorder";
               break;
               case '100+': age100 = "activeBorder";
               break;
               default:  console.log("no age data yet");
            }
        } else {
            let age_selector = this.props.age
            switch (age_selector)
            {
               case 'All': all_ages = "activeBorder"
               break;
               case '18to20': age18to20 = "activeBorder";
               break;
               case '21to25': age21to25 = "activeBorder";
               break;
               case '26to30': age26to30 = "activeBorder";
               break;
               case '31to35': age31to35 = "activeBorder";
               break;
               case '36to40': age36to40 = "activeBorder";
               break;
               case '41to50': age41to50 = "activeBorder";
               break;
               case '51to60': age51to60 = "activeBorder";
               break;
               case '61to70': age61to70 = "activeBorder";
               break;
               case '71to80': age71to80 = "activeBorder";
               break;
               case '81to100': age81to100 = "activeBorder";
               break;
               case '100+': age100 = "activeBorder";
               break;
               default:  console.log("no age data yet");
            }
        }
        
        return (
            <div>
                <h6 className="center-align">Age Range</h6>
                <div className="row">
                    <div className="col s3 center-align">
                        <a href="#" className={age18to20} onClick={this.props.age18to20tapped}>18-20</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age21to25} onClick={this.props.age21to25tapped}>21-25</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age26to30} onClick={this.props.age26to30tapped}>26-30</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age31to35} onClick={this.props.age31to35tapped}>31-35</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 center-align">
                        <a href="#" className={age36to40} onClick={this.props.age36to40tapped}>36-40</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age41to50} onClick={this.props.age41to50tapped}>41-50</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age51to60} onClick={this.props.age51to60tapped}>51-60</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age61to70} onClick={this.props.age61to70tapped}>61-70</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 center-align">
                        <a href="#" className={age71to80} onClick={this.props.age71to80tapped}>71-80</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age81to100} onClick={this.props.age81to100tapped}>81-100</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={age100} onClick={this.props.age100tapped}>100+</a>
                    </div>
                    <div className="col s3 center-align">
                        <a href="#" className={all_ages} onClick={this.props.allAgesTapped}>All Ages</a>
                    </div>
                </div>
            </div>
        )
    }
}