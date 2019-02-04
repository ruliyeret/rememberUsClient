import React from 'react'
import {View} from "react-native";
import Gallery from "react-native-image-gallery";

const A = (props)=>{

    return(
        <View  { ...this.panResponder.panHandlers } behavior="padding" style = { {position:'absolute'}}>
            <Gallery
                style={{zIndex:1,position:'absolute'}}
                onPageScroll={(event)=>props.initState(event)}
                initialPage={props.position}
                images={props.srcImageList}
            />
        </View>
    );
}

export default A;