import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions/actionIndex';

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental(true)

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props

        if( expanded ) {
            return (
                <CardSection>
                    <Text style={styles.descStyle}>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
}

function mapStateToProps( state, ownProps ) {
    const { selection } = state;
    const expanded = selection === ownProps.library.id

    return {
        expanded
    };
}

export default connect( mapStateToProps, actions )(ListItem);