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
import { noteCreate, noteSave } from './actions';

class RouterComponent extends Component {
    createNote() {
        const { noteHeadingText, noteContentText } = this.props;

        if (noteHeadingText.trim() === '') {
            return;
        }

        this.props.noteCreate({ noteHeadingText, noteContentText });
    }

    saveNoteChanges() {
        const { noteHeadingText, noteContentText, currentNote } = this.props;
        this.props.noteSave({ noteHeadingText, noteContentText, uid: currentNote });
    }

    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>
                <Scene key="auth">
                    <Scene
                        key="register"
                        component={RegisterForm}
                        title="Register"
                        onRight={() => Actions.login()}
                        rightTitle="Login"
                        initial
                    />
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                        onRight={() => Actions.forgotPassword()}
                        rightTitle="Forgot?"
                    />
                    <Scene
                        key="forgotPassword"
                        component={ForgotPassword} title="Recover Password"
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        key="notesList"
                        component={NotesList}
                        title="My Notes"
                        onRight={() => Actions.noteCreate()}
                        rightTitle="New"
                        rightButtonTextStyle={{ color: '#00CC66' }}
                        onLeft={() => Actions.account()}
                        leftTitle='Account'
                        initial
                    />
                    <Scene
                        key="account"
                        component={Account}
                        title="Account"
                        direction='vertical'
                    />
                    <Scene
                        key="noteCreate" component={NoteCreate}
                        title="New Note"
                        onRight={this.createNote.bind(this)}
                        rightTitle='Save'
                    />
                    <Scene
                        key="noteEdit"
                        component={NoteEdit}
                        title="Note Details"
                        onRight={this.saveNoteChanges.bind(this)}
                        rightTitle='Save'
                    />
                </Scene>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    const { noteHeadingText, noteContentText, currentNote } = state.note;

    return { noteHeadingText, noteContentText, currentNote };
};

export default connect(mapStateToProps, { noteCreate, noteSave })(RouterComponent);
