import React, { Component } from 'react';
import { Card } from './common';
import NoteForm from './NoteForm';

class NoteCreate extends Component {

    render() {
        return (
            <Card>
                <NoteForm />
            </Card>
        );
    }
}

export default NoteCreate;
