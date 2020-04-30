
import React, { Component } from 'react';
import {Avatar, Card, ListItem} from "react-native-elements";
import {View} from "react-native";


const sendDetailOption = [
    {
        icon:"envelope",
        name: 'send Email',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        icon:'facebook',
        name: 'Log in with Facebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
}
];

export default class AccessAccount extends Component{
    constructor(props){
        super(props);


    }

    sendDetails(passwordRecoveryLocation){

        passwordRecoveryLocation === 'facebook'?
        console.log("facebook: " + this.props.email):
            console.log("email: " + this.props.email)
    }


    render(){
        return(
            <View>
            <Card containerStyle={{padding: 0}} >
                {
                    sendDetailOption.map((u, i) => {
                        return (
                            <ListItem
                                key={i}
                                roundAvatar
                                title={u.name}
                                avatar={<Avatar
                                    icon={{name: u.icon, type: 'font-awesome'}}
                                    size="small"
                                    rounded
                                    onPress={() => this.sendDetails(u.icon)}
                                    activeOpacity={0.7}
                                />}
                            />
                        );
                    })
                }
            </Card>
            </View>
        );
    }
}