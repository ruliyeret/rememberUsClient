import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import firebase from 'firebase';
import Button from "../Common/Button/Button";
import Card from "../Common/card/Card";
import CardSection from "../Common/card/Card-Section";
import Input from "../Common/input";
import Spinner from "../Common/spiner";

import { Actions } from 'react-native-router-flux';
import Logo from "./Logo";
import Form from "./Form";
import Menu from "../Home/Menu";

class LoginForm extends Component {

    constructor(){
        super();
        this.state={
            locationX:0,
            locationY:0
        }
    }
    signup() {
        Actions.sighUp()
    }
    forgotPassword(){
        // Actions.forgotPassword();
        console.log('forgot password');
    }

    render() {
        return(
            <View style={styles.container}>

                <Logo/>
                <Form/>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign up</Text></TouchableOpacity>
                </View>

            </View>

        );
    }
}

// const styles = {
//     errorTextStyle: {
//         fontSize: 20,
//         alignSelf: 'center',
//         color: 'red'
//     }
//
// };



const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});

export default LoginForm;



{/*<Card>*/}
{/*<CardSection>*/}
{/*<Input*/}
{/*placeholder="user@gmail.com"*/}
{/*label="EMAIL"*/}
{/*value={this.state.email}*/}
{/*onChangeText={email => this.setState({ email })}*/}
{/*/>*/}
{/*</CardSection>*/}

{/*<CardSection>*/}
{/*<Input*/}
{/*secureTextEntry*/}
{/*placeholder="password"*/}
{/*label="Password"*/}
{/*value={this.state.password}*/}
{/*onChangeText={password => this.setState({ password })}*/}
{/*/>*/}
{/*</CardSection>*/}

{/*<Text style={styles.errorTextStyle}>*/}
{/*{this.state.error}*/}
{/*</Text>*/}

{/*<CardSection>*/}
{/*{this.renderButton()}*/}
//     {/*</CardSection>*/}
//
// {/*</Card>*/}