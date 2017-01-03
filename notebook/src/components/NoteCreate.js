import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Card } from './common';
import NoteForm from './NoteForm';
import { noteHeadingChanged, noteContentChanged } from '../actions';

class NoteCreate extends Component {

    componentDidMount() {
        this.props.noteHeadingChanged('');
        this.props.noteContentChanged('');
    }

    render() {
        return (
            <View>
                <Card>
                    <NoteForm />
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
    img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    }
};

export default connect(null, { noteHeadingChanged, noteContentChanged })(NoteCreate);
