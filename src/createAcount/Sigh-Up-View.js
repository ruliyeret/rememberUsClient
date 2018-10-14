import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image, TouchableOpacity,ImageBackground

} from 'react-native';
import {Actions} from "react-native-router-flux";
import {Button} from "react-native-elements";

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

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
            fullName: '',
            fullNameErrorMessage:"",
            email   : '',
            emailErrorMessage:"",
            address:'',
            password: '',
            passwordErrorMessage:"",
            errorMessage: "",
            checkValid:false
        }
    }

    setErrorMessage(error){
        this.setState({
            errorMessage:error
        });
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

    isPasswordValid() {
        let isValid = true;
        if (this.state.checkValid) {

            if (this.state.password == "") {
                isValid = false;
            } else if (this.state.password < 6) {
                this.state.passwordErrorMessage = this.option.password.error;
                isValid = false;
            }
        }
        return isValid;
    }
    isNameValid(){

        if(this.state.checkValid) {
            if (this.state.fullName == "") {
                return false;
            }
        }
        return true;

    }

    isValidation() {
        let isValid = true;
        if(this.state.checkValid) {
            if(!this.isNameValid() || !this.isEmailValid() || !this.isPasswordValid()) {
                isValid = false
            }
       }

        return isValid;
    }
    signin = () => {
        this.state.checkValid = true;
        if(this.isValidation()){
            Actions.HomePage();

        }else{
            this.setState({checkValid:true});
         }
    };

    render() {
        this.state.errorMessage ="";
        return (

            <ImageBackground
                source={require("./family.jpg")}
                style={{width: '100%', height: '100%', position: 'absolute',resizeMode: 'cover'}}
            >

                <View style={styles.container}>

                    <View style={this.isNameValid()  ? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Full name"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(fullName) => this.setState({fullName})}/>

                    </View>
                    <Text style={styles.errorMessage}>{this.state.fullNameErrorMessage}</Text>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="address (optional)"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(address) => this.setState({address})}/>
                    </View>

                    <View style={this.isEmailValid() ? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Email"
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(email) => this.setState({email})}/>
                    </View>
                    <Text style={styles.errorMessage}>{this.state.emailErrorMessage}</Text>
                    <View style={this.isPasswordValid()? [styles.inputContainer,styles.valid] :[styles.inputContainer,styles.invalid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Password"
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(password) => this.setState({password})}/>
                    </View>
                    <Text style={styles.errorMessage}>{this.state.passwordErrorMessage}</Text>

                    <TouchableOpacity onPress={this.signin}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
                    <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                </View>

            </ImageBackground>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1

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
