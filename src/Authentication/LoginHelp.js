import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Actions} from "react-native-router-flux";
import {Button} from "react-native-elements";

export default class LoginHelp extends Component{

    constructor(){
        super();
        this.state={
            email:''
        }
    }
    nextAction(){
       console.log('this is the email '  +this.state.email);
       Actions.accessAccount({email:this.state.email});
    }
    render() {
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText={(email) => this.setState({email})}
                           />

                <Button
                    onPress={()=>this.nextAction()}
                    buttonStyle={{
                        width: 250,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 4
                    }}
                    backgroundColor = 'green'
                    color=  'white'

                    title='NEXT'
                    type="clear"

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    nextButton: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonNextText: {
        fontSize:16,
        fontWeight:'500',
        color:'green',
        textAlign:'center'
    }
});