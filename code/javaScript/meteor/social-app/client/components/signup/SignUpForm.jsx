import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SignUpForm extends Component {
    
    render() {
        
        let activeUserMaleGender = this.props.male_user;
        let activeUserFemaleGender = this.props.female_user;
        let likesMales = this.props.likes_males;
        let likesFemales = this.props.likes_females;
        
        return (
            <div>
                <div>
                    <h3 className="center-align">Sign Up</h3>
                    <p className="center-align">
                        It's free and takes less than 2 minutes
                    </p>
                </div>
                <div>
                	<div>
                        <p className="genderSelector">
                            I am a 
                            <a onClick={this.props.selectMaleUser} href="#" className={activeUserMaleGender} id="i_am_male"><i className="fa fa-male" aria-hidden="true"></i></a>
                            <a onClick={this.props.selectFemaleUser} href="#" className={activeUserFemaleGender} id="i_am_female"><i className="fa fa-female" aria-hidden="true"></i></a>,
                            interested in a
                            <a onClick={this.props.selectLikesMales} href="#" className={likesMales} id="interested_in_male"><i className="fa fa-male" aria-hidden="true"></i></a>
                            <a onClick={this.props.selectLikesFemales} href="#" className={likesFemales} id="interested_in_female"><i className="fa fa-female" aria-hidden="true"></i></a>
                        </p>
                    </div>
                    <div>
                        <form onSubmit={this.props.handleRegistration}>
                            <div className="input-field">
                                <input ref="email_to_signup" type="email" className="validate"/>
                                <label htmlFor="email_to_signup"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                            </div>
                            <div className="input-field">
                                <input ref="username" type="text" className="validate"/>
                                <label htmlFor="username"><i className="fa fa-user" aria-hidden="true"></i> Username</label>
                            </div>
                            <div className="input-field">
                                <input ref="password_to_signup" type="password" className="validate"/>
                                <label htmlFor="password_to_signup"><i className="fa fa-lock" aria-hidden="true"></i> Password</label>
                            </div>
                            <div className="input-field">
                                <input ref="city_to_signup" type="text" className="validate"/>
                                <label htmlFor="city_to_signup"><i className="fa fa-home" aria-hidden="true"></i> City</label>
                            </div>
                            <div className="input-field">
                                <input ref="occupation_to_signup" type="text" className="validate"/>
                                <label htmlFor="occupation_to_signup"><i className="fa fa-briefcase" aria-hidden="true"></i> Occupation</label>
                            </div>
                            <div className="input-field birthdaySelector">
                                <p htmlFor="birthday_to_signup"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Birthday</p>
                                <input  ref="birthday_to_signup" type="date" className=""/>
                            </div>
                            <div className="row">
                                <button className="waves-effect teal accent-4 btn-large col s12">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}