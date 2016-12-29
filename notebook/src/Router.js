import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import RegisterForm from './components/RegisterForm';
import NotesList from './components/NotesList';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';

const RouterComponent = () => {
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
                <Scene key="forgotPassword" component={ForgotPassword} title="Recover Password" />
            </Scene>
            <Scene key="main">
                <Scene
                    key="notesList"
                    component={NotesList}
                    title="Notes"
                    onRight={() => Actions.noteCreate()}
                    rightTitle="New"
                    initial
                />
                <Scene key="noteCreate" component={NoteCreate} title="New Note" />
                <Scene key="noteEdit" component={NoteEdit} title="Note Details" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
