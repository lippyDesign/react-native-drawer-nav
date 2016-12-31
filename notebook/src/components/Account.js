import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { CardSection, Card, Button, Confirm, Input } from './common';
import {
    logoutUser,
    deleteUser,
    changePassword,
    deleteAccountPasswordChanged,
    showChangePassword,
    hideChangePassword,
    changePasswordOldChanged,
    changePasswordNewChanged,
    changePasswordNewConfirmChanged
} from '../actions';

class Account extends Component {
    state = { showModal: false }

    onLogoutPress() {
        this.props.logoutUser();
    }

    onChangePasswordPress() {
        this.props.changePassword(this.props.changePasswordTextOld, this.props.changePasswordTextNew, this.props.changePasswordTextNewConfirm);
    }

    onAccept() {
        this.props.deleteUser(this.props.deleteAccountPasswordText);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    showChangePassword() {
        this.props.showChangePassword();
    }

    passwordTextChanged(text) {
        this.props.deleteAccountPasswordChanged(text);
    }

    oldPasswordTextChanged(text) {
        this.props.changePasswordOldChanged(text);
    }

    newPasswordTextChanged(text) {
        this.props.changePasswordNewChanged(text);
    }

    newPasswordConfirmTextChanged(text) {
        this.props.changePasswordNewConfirmChanged(text);
    }

    render() {
        const { logoutStyle, deleteStyle, deleteAccountTextStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onLogoutPress.bind(this)} additionalStyles={logoutStyle}>
                        Log Out
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.showChangePassword.bind(this)}>
                        Change Password
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })} additionalStyles={deleteStyle}>
                        Delete Account
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    <Text style={deleteAccountTextStyle.textStyle}>Delete Account?</Text>
                    <View style={{ width: 350, height: 20 }}>
                        <Input
                            secureTextEntry
                            label="password"
                            placeholder="password"
                            onChangeText={this.passwordTextChanged.bind(this)}
                            value={this.props.deleteAccountPasswordText}
                        />
                    </View>
                </Confirm>

                <Confirm
                    visible={this.props.showPasswordChangeModal}
                    onAccept={this.onChangePasswordPress.bind(this)}
                    onDecline={() => this.props.hideChangePassword()}
                >
                    <Text>Change Password</Text>
                    <View style={{ width: 350, height: 20, borderColor: '#696969', borderBottomWidth: 1 }}>
                        <Input
                            secureTextEntry
                            label="Old"
                            placeholder="old password"
                            onChangeText={this.oldPasswordTextChanged.bind(this)}
                            value={this.props.changePasswordTextOld}
                        />
                    </View>

                    <View style={{ width: 350, height: 20, borderColor: '#696969', borderBottomWidth: 1 }}>
                        <Input
                            secureTextEntry
                            label="New"
                            placeholder="new password"
                            onChangeText={this.newPasswordTextChanged.bind(this)}
                            value={this.props.changePasswordTextNew}
                        />
                    </View>

                    <View style={{ width: 350, height: 20, borderColor: '#696969', borderBottomWidth: 1 }}>
                        <Input
                            secureTextEntry
                            label="New"
                            placeholder="confirm password"
                            onChangeText={this.newPasswordConfirmTextChanged.bind(this)}
                            value={this.props.changePasswordTextNewConfirm}
                        />
                    </View>
                </Confirm>

            </Card>
        );
    }
}

const styles = {
    logoutStyle: {
        borderStyle: {
            borderColor: '#ff8000'
        },
        textStyle: {
            color: '#ff8000'
        }
    },
    deleteStyle: {
        borderStyle: {
            borderColor: '#ff0000'
        },
        textStyle: {
            color: '#ff0000'
        }
    },
    deleteAccountTextStyle: {
        textStyle: {
            color: '#ff0000'
        }
    }
};

const mapStateToProps = state => {
    const {
        deleteAccountPasswordText,
        changePasswordTextOld,
        changePasswordTextNew,
        changePasswordTextNewConfirm,
        showPasswordChangeModal
    } = state.auth;

    return {
        deleteAccountPasswordText,
        changePasswordTextOld,
        changePasswordTextNew,
        changePasswordTextNewConfirm,
        showPasswordChangeModal
    };
};

export default connect(mapStateToProps,
    {
        logoutUser,
        deleteUser,
        showChangePassword,
        hideChangePassword,
        changePassword,
        deleteAccountPasswordChanged, 
        changePasswordOldChanged,
        changePasswordNewChanged,
        changePasswordNewConfirmChanged
    }
    )(Account);
