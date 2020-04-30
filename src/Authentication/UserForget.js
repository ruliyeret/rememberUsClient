import React, {Component} from 'react'
import {Alert, Image, KeyboardAvoidingView, StyleSheet, TextInput, View} from "react-native";
import {Button} from "react-native-elements";
import {RestApi} from "../Home/RestApi/RestApi";
export default class UserForget extends Component {

    constructor(){
        super();
        this.state={
            emailAddress:""
        }
    }
    sendEmail(){

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        // if(reg.test(this.state.emailAddress) === false) {
        //     console.log(this.state.emailAddress);
        //     Alert.alert(
        //         'Incorrect email address',
        //         ' and try again.',
        //         [
        //             {text: 'Try Again', onPress: () => this.setState({emailAddress:""})}
        //         ],
        //         { cancelable: false }
        //     )
        // }else{
        //     email("yeret.rul@gmail.com", {
        //         subject: 'Show how to use',
        //         body: 'Some body right here'
        //     }).catch(console.error)
        // }
    }
    render() {
        RestApi.forgetUser("ruli");
        return (
            <View style={{flex: 1}}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="address (optional)"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(address) => this.setState({address})}/>
                </View>

                <Button
                    onPress={() => this.sendEmail()}
                    icon={{name: 'right'}}
                    buttonStyle={{
                        width: 250,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 4
                    }}
                    title='SEND'

                />
            </View>)
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


    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    }
});