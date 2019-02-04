import React from 'react'
import {TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const EditPhotoOption =(props) =>{

    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', top:'40%',zIndex:1}}>
            <TouchableOpacity onPress={props.setTag()} >
                <Icon name = "tag" color = "white" size  = {25}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={props.setLocation}>
                <Icon name = "location" color = "white" size  = {25}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.setInfo()}>
                <Icon name = "info" color = "white" size  = {25}/>
            </TouchableOpacity>
        </View>
    );


};
export default  EditPhotoOption;