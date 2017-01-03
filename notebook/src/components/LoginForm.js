import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { loginEmailChanged, loginPasswordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onButtonPress() {
        const { loginEmailText, loginPasswordText } = this.props;

        this.props.loginUser({ loginEmailText, loginPasswordText });
    }

    emailTextChanged(text) {
        this.props.loginEmailChanged(text);
    }

    passwordTextChanged(text) {
        this.props.loginPasswordChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@email.com"
                            onChangeText={this.emailTextChanged.bind(this)}
                            value={this.props.loginEmailText}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={this.passwordTextChanged.bind(this)}
                            value={this.props.loginPasswordText}
                        />
                    </CardSection>

                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>

                <Image
                    style={styles.img}
                    source={require('../img/Simplepad.png')}
                />
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    img: {
        width: 220,
        height: 220,
        alignSelf: 'center',
        marginTop: 20
    }
};

const mapStateToProps = state => {
    const {
        loginEmailText,
        loginPasswordText,
        loading,
        error
    } = state.auth;

    return { loginEmailText, loginPasswordText, loading, error };
};

export default connect(mapStateToProps, { loginEmailChanged, loginPasswordChanged, loginUser })(LoginForm);
