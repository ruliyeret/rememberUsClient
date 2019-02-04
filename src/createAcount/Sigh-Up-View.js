import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image, TouchableOpacity,ImageBackground,KeyboardAvoidingView

} from 'react-native';
import {Actions} from "react-native-router-flux";
import {Button} from "react-native-elements";
import {User} from "./entity/userName";
import {Deceased} from "./entity/deceeased";


export default class SignUpView extends Component {

      option ={
        email: {
            error: 'Invalid email'
        },
          fullName: {
              error: 'Invalid Name '
          },
        password: {
            error: 'Invalid password, password most have 6 character'
        },
          generalError:{
             error: "all detaild required"
          }
    };

    constructor(props) {
        super(props);
       this.state = {
           confirmPassword:"",
            fullName: '',
            fullNameErrorMessage:"",
            email   : '',
            emailErrorMessage:"",
            phoneNumber:'',
            password: '',
            passwordErrorMessage:"",
            errorMessage: "",
            checkValid:false
        }
    }

    isEmailValid(){
        let isValid = true;
        if(this.state.checkValid){
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(this.state.email.length < 1){
                this.state.errorMessage = this.option.generalError.error;
                isValid = false;
            }
          else if(reg.test(this.state.email) === false) {
                this.state.emailErrorMessage = this.option.email.error;
                isValid =  false;
            }
        }
        return isValid;
    }

    isConfirmPassword(){
        if(this.state.password == this.state.confirmPassword && this.state.password.length > 6){
            return  true;
        }
        return  false;
    }
    isPasswordValid() {
        let isValid = true;
        if (this.state.checkValid) {

            if (this.state.password == "") {
                console.log("Invalid password");
                isValid = false;
            } else if (this.state.password < 6) {
                console.log("Invalid password");
                isValid = false;
            }
        }
        return isValid;
    }
    isNameValid(){
        if(this.state.checkValid) {
            if (this.state.fullName == "") {
                console.log("Invalid Name");
                return false;
            }
        }
        return true;

    }

    isValidation() {
        this.setState({checkValid:true})
        if(this.isNameValid() &&
            this.isEmailValid() &&
            this.isPasswordValid() &&
            this.isConfirmPassword()) {

            return true
        }else {
            return false;
        }
    }


    saveUser(){
        console.log("in saveUserName Function")
        if(this.isValidation()){
            console.log("its mean is valid")
            let userName =
                new User(this.state.fullName,this.state.password,this.state.email,new Deceased(),1,"M",new Date(),this.state.phoneNumber);
            Actions.deceasedForm({userName : userName});
        }else{
            this.setState({checkValid:true })
        }

}
    render() {
        this.state.errorMessage ="";
        return (

            <ImageBackground
                source={require("../images/sighupview.jpg")}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            >

                <KeyboardAvoidingView  style={styles.container} behavior="padding">

                    <View  style={this.isNameValid()  ? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Full name"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(fullName) => this.setState({fullName})}/>

                    </View>


                    <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="phoneNumber (optional)"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(phoneNumber) => this.setState({phoneNumber})}/>
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView behavior="padding" style={this.isEmailValid() ? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Email"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(email) => this.setState({email})}/>
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView behavior="padding" style={this.isPasswordValid()? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Password"
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(password) => this.setState({password})}/>
                    </KeyboardAvoidingView>
                    <KeyboardAvoidingView behavior="padding" style={this.isPasswordValid()? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Confirm Password "
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>
                    </KeyboardAvoidingView>


                    <Button
                        onPress={()=>this.saveUser()}
                        icon={{ name: 'right' }}
                        buttonStyle={{
                            width: 250,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 4
                        }}
                        title='NEXT'

                    />

                </KeyboardAvoidingView >

            </ImageBackground>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',



    },
    inputContainer: {
        borderLeftWidth: 6,
        borderRightWidth: 6,


        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:45,
        flexDirection: 'row',
        alignItems:'center'
    },
    valid:{
        borderColor:'black',
    },
    invalid:{
        borderColor:'red',
    },

    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    errorMessage:{
        color:'red',
        fontWeight:'bold',
        fontSize:20
    },
    button: {
        width:85,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: 'white',
    }
});
