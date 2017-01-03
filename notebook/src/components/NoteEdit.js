import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import NoteForm from './NoteForm';
import { noteUpdate, noteSave, noteDelete, setCurrentNoteView } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class NoteEdit extends Component {
    state = { showModal: false }

    componentWillMount() {
        const { uid } = this.props.note;

        this.props.setCurrentNoteView(uid);

        _.each(this.props.note, (value, prop) => {
            this.props.noteUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { noteHeadingText, noteContentText } = this.props;
        this.props.noteSave({ noteHeadingText, noteContentText, uid: this.props.note.uid });
    }

    onEmailPress() {
        const { noteHeadingText, noteContentText } = this.props;

        Communications.email(
            null,
            null,
            null,
            `Simple Notebook Note ${noteHeadingText}`,
            `title: ${noteHeadingText}, Content: ${noteContentText}`
        );
    }

    onTextPress() {
        const { noteHeadingText, noteContentText } = this.props;

        Communications.text(null, `Title: ${noteHeadingText}, Content: ${noteContentText}`);
    }

    onAccept() {
        const { uid } = this.props.note;

        this.props.noteDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        const { textNoteStyle, deleteStyle } = styles;

        return (
            <Card>
                <NoteForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Email Note
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} additionalStyles={textNoteStyle}>
                        Text Note
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                        additionalStyles={deleteStyle}
                    >
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

const styles = {
    textNoteStyle: {
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
    }
};

const mapStateToProps = (state) => {
    const { noteHeadingText, noteContentText } = state.note;

    return { noteHeadingText, noteContentText };
};

export default connect(mapStateToProps,
    { noteUpdate, noteSave, noteDelete, setCurrentNoteView }
)(NoteEdit);
