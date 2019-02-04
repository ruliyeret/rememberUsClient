import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { Component } from 'react';

export default class ControlPanel extends Component {


    constructor(){
        super();
    }
    render() {

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Control Panel</Text>
                <TouchableOpacity style={styles.button} onPress={console.log("hi")}>
                    <Text>Close Drawer</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})
