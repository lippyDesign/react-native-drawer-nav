import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LoggedOutNav from '../components/navigation/LoggedOutNav.jsx';
import SignUpForm from '../components/signup/SignUpForm.jsx';
import Footer from '../components/footer/Footer.jsx';

export default class RegisterPage extends Component {
    
    constructor() {
        super();
        this.state = {
            isUserGenderSelected: "",
            likesGenderSelected: "",
            maleUser: "gender_to_sign_up",
            femaleUser: "gender_to_sign_up",
            likeMales: "gender_to_sign_up",
            likeFemales: "gender_to_sign_up"
        }
    }
    
    maleUserSelected(event) {
        event.preventDefault();
        this.setState({
            isUserGenderSelected: "male",
            maleUser: "gender_to_sign_up userSelectionBackground",
            femaleUser: "gender_to_sign_up"
        })
    }
    
    femaleUserSelected(event) {
        event.preventDefault();
        this.setState({
            isUserGenderSelected: "female",
            maleUser: "gender_to_sign_up",
            femaleUser: "gender_to_sign_up userSelectionBackground"
        })
    }
    
    likesFemaleSelected(event) {
        event.preventDefault();
        this.setState({
            likesGenderSelected: "females",
            likeMales: "gender_to_sign_up",
            likeFemales: "gender_to_sign_up userSelectionBackground"
        })
    }
    
    likesMaleSelected(event) {
        event.preventDefault();
        this.setState({
            likesGenderSelected: "males",
            likeMales: "gender_to_sign_up userSelectionBackground",
            likeFemales: "gender_to_sign_up"
        })
    }
    
    handleReg(event) {
    event.preventDefault();
 
    // Find the text field via the React refs
    const username = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.username).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.email_to_signup).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.password_to_signup).value.trim();
    const city = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.city_to_signup).value.trim();
    const occupation = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.occupation_to_signup).value.trim();
    const birthday = ReactDOM.findDOMNode(this.refs.sign_up_form.refs.birthday_to_signup).value.trim();
    const users_gender = this.state.isUserGenderSelected;
    const user_likes_gender = this.state.likesGenderSelected;
    
    if (this.state.isUserGenderSelected !== "" && this.state.likesGenderSelected !== "") {
        if (password !== "" && email !== "" && username !== "" && city !== "" && occupation !== "" && birthday !== "") {
      
            // Display Loading Spinner
            this.setState({
              isSpinnerVisible: true
            })
      
            var accountInfo = {
                email,
                password,
                username,
                profile: {
                  city,
                  occupation,
                  birthday,
                  users_gender,
                  user_likes_gender,
                  user_likes_ages: 'All',
                  user_likes_distance: '25',
                  distance_from: 'Current Location',
                  user_discoverable: true,
                  user_leaves_footprints: true,
                  users_occupation_showing: true,
                  avatar: 'http://placehold.it/150x150',
                  profiles_liked: [],
                  connections: []
                }
            }
            
            Accounts.createUser(accountInfo, function(err) {
                // if there was an error creating an account
                if (err) {
                    Materialize.toast(err.reason, 4000);
                } else {
                    // redirect to dashboard page
                    FlowRouter.go('/dashboard');
                }
            });
            this.setState({
              isSpinnerVisible: false
            });
            
        } else {
            Materialize.toast('Passwords do not match or a field is empty', 4000);
        }
     } else {
         Materialize.toast('Please select gender', 4000);
     }
  }

    render() {
        return (
            <div>
                <LoggedOutNav/>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <SignUpForm
                        ref="sign_up_form"
                        male_user = {this.state.maleUser}
                        female_user = {this.state.femaleUser}
                        likes_males = {this.state.likeMales}
                        likes_females = {this.state.likeFemales}
                        selected_user_gender = {this.state.isUserGenderSelected}
                        selected_likes_gender = {this.state.likesGenderSelected}
                        selectMaleUser = {this.maleUserSelected.bind(this)}
                        selectFemaleUser = {this.femaleUserSelected.bind(this)}
                        selectLikesMales = {this.likesMaleSelected.bind(this)}
                        selectLikesFemales = {this.likesFemaleSelected.bind(this)}
                        handleRegistration = {this.handleReg.bind(this)}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}