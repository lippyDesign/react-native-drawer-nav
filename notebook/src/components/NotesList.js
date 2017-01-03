import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, Image } from 'react-native';
import _ from 'lodash';
import { notesFetch } from '../actions';
import ListItem from './ListItem';

class NotesList extends Component {
    componentWillMount() {
        this.props.notesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ notes }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(notes);
    }

    renderRow(note) {
        return <ListItem note={note} />;
    }

    render() {
        if (this.props.notes.length === 0) {
            return (
                <View>
                    <Text>No Notes Yet...</Text>
                    <Image
                        style={styles.img}
                        source={require('../img/Simplepad.png')}
                    />
                </View>);
        }
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = {
    img: {
        width: 220,
        height: 220,
        alignSelf: 'center',
        marginTop: 20
    }
};

const mapStateToProps = state => {
    const notes = _.map(state.notes, (val, uid) => {
        return { ...val, uid }; // end obj is { shift: 'Monday', name: 'Sam', id: '1234' }
    });

    return { notes };
};

export default connect(mapStateToProps, { notesFetch })(NotesList);
