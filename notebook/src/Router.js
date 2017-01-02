import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import RegisterForm from './components/RegisterForm';
import NotesList from './components/NotesList';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';
import Account from './components/Account';
import { noteCreate } from './actions';

class RouterComponent extends Component {
    saveNote() {
        const { noteHeadingText, noteContentText } = this.props;

        if (noteHeadingText.trim() === '') {
            return;
        }

        this.props.noteCreate({ noteHeadingText, noteContentText });
    }

    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>
                <Scene key="auth">
                    <Scene
                        key="register"
                        component={RegisterForm}
                        title="Please Register"
                        onRight={() => Actions.login()}
                        rightTitle="Login"
                        initial
                    />
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        onRight={() => Actions.forgotPassword()}
                        rightTitle="Forgot?"
                    />
                    <Scene
                        key="forgotPassword"
                        component={ForgotPassword} title="Recover Password"
                    />
                </Scene>

                <Scene key="main">
                    <Scene key="account" component={Account} title="Account" />
                    <Scene
                        key="notesList"
                        component={NotesList}
                        title="Notes"
                        onRight={() => Actions.noteCreate()}
                        rightTitle="New"
                        rightButtonTextStyle={{ color: '#00CC66' }}
                        onLeft={() => Actions.account()}
                        leftTitle='Account'
                        initial
                    />
                    <Scene
                        key="noteCreate" component={NoteCreate}
                        title="New Note"
                        onRight={this.saveNote.bind(this)}
                        rightTitle='Save'
                    />
                    <Scene key="noteEdit" component={NoteEdit} title="Note Details" />
                </Scene>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    const { noteHeadingText, noteContentText } = state.note;

    return { noteHeadingText, noteContentText };
};

export default connect(mapStateToProps, { noteCreate })(RouterComponent);
