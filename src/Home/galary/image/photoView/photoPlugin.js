import React from 'react'
import {TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const PhotoPlugin =(props)=>{
    if(props.displayInfo) {
        return (

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: '25%',
                zIndex: 2,
                position: 'absolute',
                left: 0,
                right: 0
            }}>
                <TouchableOpacity onPress={() => props.setTag()}>
                    <Icon name="tag" color="white" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setLocation()}>
                    <Icon name="location" color="white" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.setInfo()}>
                    <Icon name="info" color="white" size={25}/>
                </TouchableOpacity>
            </View>)
    }
    return (<View/>)

};

export default PhotoPlugin;