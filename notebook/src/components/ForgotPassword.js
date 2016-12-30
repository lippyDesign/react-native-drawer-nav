import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { recoveryEmailChanged, recoverAccountTapped } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class ForgotPassword extends Component {
    onButtonPress() {
        const { recoveryEmail } = this.props;

        this.props.recoverAccountTapped({ recoveryEmail });
    }

    recoveryEmailTextChanged(text) {
        this.props.recoveryEmailChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Send Password
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
                        onChangeText={this.recoveryEmailTextChanged.bind(this)}
                        value={this.props.recoveryEmail}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.helperMessage}
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
        recoveryEmail,
        helperMessage,
        loading
    } = state.auth;

    return { recoveryEmail, helperMessage, loading };
};

export default connect(mapStateToProps, { recoveryEmailChanged, recoverAccountTapped })(ForgotPassword);
