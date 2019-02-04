
import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const ViewLocation = (props)=>{
    if(props.displayPhotoInfo) {
        return (
            <View style={props.displayPhotoInfo ? styles.viewLocation : styles.hideInfo}>
                <Text h1 style={styles.textLocation}> {props.location} </Text>
                <Icon name="location-pin" size={25} color="#5cd65c"/>
            </View>
        );
    }
    return (<View/>);

}

const styles = StyleSheet.create({

    tagIcon :{
        left:'1%',
        top:'60%'
    },
    locationInputs:{
        height:45,
        textAlign:'center',
        borderBottomColor: '#FFFFFF',
        flex:1,
    },

    viewLocation:{
        width:'45%', alignItems: 'center',left:"30%", top:"10%"
    },
    textLocation:{
        textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey',
        color: '#fff',
        backgroundColor : 'grey',
    },
    textInfo:{
        textAlign:'center',
        zIndex:1,
        bottom:'20%',
    },
    hideInfo:{
        display:'none'
    },

    infoIcon :{
        left:'90%',
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },

})


export default  ViewLocation;