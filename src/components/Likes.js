import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';


class Likes extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Likes</Text>
            </SafeAreaView>
        );
    }
}

export default Likes;