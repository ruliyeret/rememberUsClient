import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    AsyncStorage,
    TouchableOpacity,
    KeyboardAvoidingView, ActivityIndicator
} from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import firebase from "firebase";
import Spinner from "../Common/spiner";
import {Actions} from "react-native-router-flux";
import {RestApi} from "../Home/RestApi/RestApi";


export default class Form extends Component {

    constructor(){
        super();
        this.state={
            username:"",
            password:"",
            loginPress:false
        }
    }
    async getUser(userName, password){
        this.setState({loginPress:true})

        const result = await RestApi.userLogin(userName,password);
        console.log("this is the result: " + result)
        if(result.length == 0){
            Alert.alert(
                'Incorrect Username',
                'The username you entered doesnt ' +
                'appear to belog to an account.' +
                'Please check your username' +
                ' and try again.',
                [
                    {text: 'Try Again', onPress: () => this.setState({loginPress:false})}
                ],
                { cancelable: false }
            )
        }
        else{
            try {
                await AsyncStorage.multiSet([
                    ["userName", result[0].name],
                    ["password", result[0].password],
                    ["personId", result[0].person_id.toString()]
                ]);
                this.setState({username:"",password:"",loginPress:false})
                Actions.HomePage();
            } catch (error) {
                console.log("error to put the user in storage: " + error)
                // Error saving data
            }
        }

    }
    checkIfPressed(){
        if(this.state.loginPress){
            return (<ActivityIndicator size="large" color="black" />)
        }
        return(<Text style={styles.buttonText}>Login</Text>);
    }
    loginButton(){

        return (
            <TouchableOpacity style={styles.button} onPress={()=>{

                this.getUser(this.state.username,this.state.password)}}>
                {this.checkIfPressed()}
            </TouchableOpacity>


        );
    }
    forgotPassword(){
        console.log('forgot password');
        Actions.loginHelp();
    }

    render(){

        return(
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="phone number, email or username"
                               value={this.state.username}
                               placeholderTextColor = "#ffffff"
                               selectionColor="#fff"
                               keyboardType="email-address"
                               onSubmitEditing = {(event)=>{this.setState({username:event.nativeEvent.text})}}
                               onChangeText={(username) => this.setState({username})}/>

                    <TextInput style={styles.inputBox}
                               underlineColorAndroid='rgba(0,0,0,0)'
                               placeholder="Password"
                               value={this.state.password}
                               secureTextEntry={true}
                               placeholderTextColor = "#ffffff"
                               ref={(input) => this.password = input}
                               onSubmitEditing = {(event)=>{this.setState({password:event.nativeEvent.text})}}
                               onChangeText={(password) => this.setState({password})}
                    />



                    {this.loginButton()}
                    <View style={styles.signupTextCont}>
                        <Text>Forgot your login details?</Text>
                        <TouchableOpacity onPress={this.forgotPassword}><Text style={styles.signupButton}>Get help sighing in</Text></TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    signupTextCont : {
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },

    forgotPassword:{
            color:'#ffffff',
            fontSize:14,
            fontWeight:'500'

    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});