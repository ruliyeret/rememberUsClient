import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image, ImageBackground, KeyboardAvoidingView, Alert

} from 'react-native';
import {Button} from "react-native-elements";
import {Actions} from "react-native-router-flux";
import {Deceased} from "./entity/deceeased";
import {RestApi} from "../Home/RestApi/RestApi";




export default class DeceasedForm extends Component {

    option ={
        username: {
            error: 'Invalid Name'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            errorMessage: "",
            checkValid:false,
            birthday:"",
            demiseDate:""
        }
    }

     saveInfoToDb(){
        let deceased = new Deceased(this.state.userName,this.state.birthday, this.state.demiseDate)
         this.props.userName.setDeceased(deceased);
        RestApi.insertNewCostumer(this.props.userName, deceased);


    }
    checkValidData(){
        if(this.state.userName != ""){
           this.saveInfoToDb();
            Actions.login();
        }else {

            Alert.alert(
                'Incorrect field',
                'user name incorrect' +
                ' try again.',
                [
                    {text: 'Try Again',}
                ],
                { cancelable: false }
            )
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

                    <View style={[styles.inputContainer,styles.valid] }>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Full Name"
                                   value={this.state.userName}
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(userName) => this.setState({userName})}/>

                    </View>

                    <View style={ [styles.inputContainer,styles.valid]}>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="Birthday"
                                   value={this.state.birthday}
                                   keyboardType="email-address"
                                   underlineColorAndroid='transparent'
                                   onChangeText={(birthday) => this.setState({birthday})}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                        <TextInput style={styles.inputs}
                                   placeholder="demise_date (optional)"
                                   keyboardType="email-address"
                                   value={this.state.demiseDate}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(demiseDate) => this.setState({demiseDate})}/>
                    </View>
                    <Text style={styles.errorMessage}>{this.state.emailErrorMessage}</Text>
                    <Text style={styles.errorMessage}>{this.state.passwordErrorMessage}</Text>

                    <Button
                        onPress={()=>this.checkValidData()}
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
                    <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>

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
