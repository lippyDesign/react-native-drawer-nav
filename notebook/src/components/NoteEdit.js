import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import NoteForm from './NoteForm';
import { noteUpdate, noteSave, noteDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class NoteEdit extends Component {
    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.note, (value, prop) => {
            this.props.noteUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { noteHeadingText, noteContentText } = this.props;
        this.props.employeeSave({ noteHeadingText, noteContentText, uid: this.props.note.uid });
    }

    onTextPress() {
        const { name, phone, shift } = this.props;

        Communications.text(phone, `${name} your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;

        this.props.noteDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <NoteForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Email Notes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Notes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Note
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Delete this note?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { noteHeadingText, noteContentText } = state.note;

    return { noteHeadingText, noteContentText };
};

export default connect(mapStateToProps, { noteUpdate, noteSave, noteDelete })(NoteEdit);
