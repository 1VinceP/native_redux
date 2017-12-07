import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentWillMount() {
        // This all instructs ListView what data to use in the list
        const ds = new ListView.DataSource({
            rowHasChanged: ( r1, r2 ) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows( this.props.libraries )
    }

    renderRow( library ) {
        return <ListItem library={library} />
    }

    render() {

        return (
            <ListView dataSource={this.dataSource}
                      renderRow={this.renderRow} />
        )
    }
}

function mapStateToProps( state ) {
    const { libraries } = state

    return {
        libraries
    };
}

export default connect( mapStateToProps )(LibraryList);