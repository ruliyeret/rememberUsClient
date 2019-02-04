import React from 'react'
import {Text, View} from "react-native";

const ViewPeopleTag = ()=>{
    let tagArr = <View/>

    if(props.eye == "green") {
        tagArr = <View>
            <Text style={[{
            zIndex: 1,
            top: parseFloat(283 - 15),
            left: parseFloat(233 - 15)
        }, styles.tagPerson]}>ruli</Text>
            <Text style={[{
                zIndex: 1,
                top: parseFloat(300 - 15),
                left: parseFloat(100 - 15)
            }, styles.tagPerson]}>david</Text>
        </View>
    }

    return tagArr;
};
export default ViewPeopleTag;