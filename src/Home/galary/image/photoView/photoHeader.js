import React from 'react'
import {TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const PhotoHeader = (props)=>{


    return(
        <View  style={{ flexDirection: 'row',justifyContent: 'space-between',top:'4%',zIndex:2,position:'absolute',left: 0,
            right: 0}}>
            <TouchableOpacity   onPress={()=>{props.onEditPress()}}>
                <Icon name = "edit"  color = {props.info} size  = {25} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{props.onEyePress()}}>
                <Icon name = "eye" color = {props.eye} size  = {25} />
            </TouchableOpacity>
        </View>
    );
}
export default PhotoHeader;