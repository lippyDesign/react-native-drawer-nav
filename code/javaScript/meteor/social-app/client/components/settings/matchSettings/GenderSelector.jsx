import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GenderSelector extends Component {
  
    render() {

        // establish CSS classes
        let user_is_male = 'marginSidesFive paddingSidesFive';
        let user_is_female = 'marginSidesFive paddingSidesFive';
        let user_prefers_males = 'marginSidesFive paddingSidesFive';
        let user_prefers_females = 'marginSidesFive paddingSidesFive';
        
        // If the state of parent container (Match Settings) is '', meaning we failed to get data from servers,
        // we are going to get the age data from another variable in parent container.
        // else (if the  state of parent container (Match Settings) is not '', meaning we have data, we are just going to use that data)
        if (this.props.users_gender === '') {
            let users_gender = this.props.users_gender_var
            switch (users_gender)
            {
               case 'male': user_is_male = "marginSidesFive paddingSidesFive activeBorder"
               break;
               case 'female': user_is_female = "marginSidesFive paddingSidesFive activeBorder"
               break;
               default:  console.log("no user gender data yet");
            }
        } else {
            let users_gender = this.props.users_gender
            switch (users_gender)
            {
               case 'male': user_is_male = "marginSidesFive paddingSidesFive activeBorder"
               break;
               case 'female': user_is_female = "marginSidesFive paddingSidesFive activeBorder";
               break;
               default:  console.log("no user gender data yet");
            }
        }

        if (this.props.user_likes_gender === '') {
            let users_gender_pref = this.props.users_gender_pref
            switch (users_gender_pref)
            {
               case 'males': user_prefers_males = "marginSidesFive paddingSidesFive activeBorder"
               break;
               case 'females': user_prefers_females = "marginSidesFive paddingSidesFive activeBorder"
               break;
               default:  console.log("no gender pref data yet");
            }
        } else {
            let users_gender_pref = this.props.user_likes_gender
            switch (users_gender_pref)
            {
               case 'males': user_prefers_males = "marginSidesFive paddingSidesFive activeBorder"
               break;
               case 'females': user_prefers_females = "marginSidesFive paddingSidesFive activeBorder";
               break;
               default:  console.log("no gender pref data yet");
            }
        }

        return (
            <div className="row center-align">
                <div className="col s12 fontSizeEighteen">
                    I am a 
                    <a onClick={this.props.userIsMaleTapped} href="#" className={user_is_male} id="i_am_male"><i className="fa fa-male" aria-hidden="true"></i></a>
                    <a onClick={this.props.userIsFemaleTapped} href="#" className={user_is_female} id="i_am_female"><i className="fa fa-female" aria-hidden="true"></i></a>,
                    interested in a
                    <a onClick={this.props.userLikesMalesTapped} href="#" className={user_prefers_males} id="interested_in_male"><i className="fa fa-male" aria-hidden="true"></i></a>
                    <a onClick={this.props.userLikesFemalesTapped} href="#" className={user_prefers_females} id="interested_in_female"><i className="fa fa-female" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}