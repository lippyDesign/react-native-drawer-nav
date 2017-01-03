import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { CardSection, Input, TextArea } from './common';
import { noteHeadingChanged, noteContentChanged } from '../actions';

class NoteForm extends Component {

    noteHeadingChanged(text) {
        this.props.noteHeadingChanged(text);
    }

    noteContentChanged(text) {
        this.props.noteContentChanged(text);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Title"
                        placeholder="My Note"
                        onChangeText={this.noteHeadingChanged.bind(this)}
                        value={this.props.noteHeadingText}
                        additionalStyles={inputStyles}
                    />
                </CardSection>
                    
                <CardSection>
                    <TextArea
                        label="Content"
                        placeholder="The note content..."
                        onChangeText={this.noteContentChanged.bind(this)}
                        value={this.props.noteContentText}
                        additionalStyles={textareaStyles}
                    />
                </CardSection>
            </View>
        );
    }
}

const inputStyles = {
    labelStyle: {
        fontWeight: '600'
    }
};

const textareaStyles = {
    labelStyle: {
        fontWeight: '600'
    }
};

const mapStateToProps = state => {
    const { noteHeadingText, noteContentText } = state.note;

    return { noteHeadingText, noteContentText };
};

export default connect(mapStateToProps, { noteHeadingChanged, noteContentChanged })(NoteForm);
