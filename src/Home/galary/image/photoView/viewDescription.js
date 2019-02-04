import React from 'react'
import {StyleSheet, Text, View} from "react-native";

const ViewDescription = (props)=>{
    if(props.displayPhotoInfo) {
        return (<Text style={styles.viewDescription}>{props.description}</Text>)
    }
    return(<View/>)
}

export default ViewDescription;


const styles = StyleSheet.create({
    viewDescription:{
        top:'75%',
        position:'absolute',
        fontWeight: 'bold',
        lineHeight:20,
        justifyContent: 'center',
        color:'white',
        fontSize:22,
        textAlign:'center',
    }

})



