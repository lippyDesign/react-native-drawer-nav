import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
    registerEmailChanged,
    registerPasswordChanged,
    registerConfirmPasswordChanged,
    registerUser
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class RegisterForm extends Component {
    onButtonPress() {
        const { registerEmailText, registerPasswordText, registerConfirmPasswordText } = this.props;
        this.props.registerUser(
            { registerEmailText, registerPasswordText, registerConfirmPasswordText }
            );
    }
    
    emailTextChanged(text) {
        this.props.registerEmailChanged(text);
    }

    passwordTextChanged(text) {
        this.props.registerPasswordChanged(text);
    }

    confirmPasswordTextChanged(text) {
        this.props.registerConfirmPasswordChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Register
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.emailTextChanged.bind(this)}
                        value={this.props.registerEmailText}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.passwordTextChanged.bind(this)}
                        value={this.props.registerPasswordText}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Confirm Password"
                        placeholder="confirm password"
                        onChangeText={this.confirmPasswordTextChanged.bind(this)}
                        value={this.props.registerConfirmPasswordText}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const {
        registerEmailText,
        registerPasswordText,
        registerConfirmPasswordText,
        loading,
        error
    } = state.auth;
    return { registerEmailText, registerPasswordText, registerConfirmPasswordText, loading, error };
};

export default connect(
    mapStateToProps,
    { registerEmailChanged, registerPasswordChanged, registerConfirmPasswordChanged, registerUser }
)(RegisterForm);
