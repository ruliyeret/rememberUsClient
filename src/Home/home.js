import React, { Component } from 'react';
import {Button, StyleSheet, View,Image } from "react-native";
import { ImagePicker } from 'expo';
export default class Home extends Component{

     imagesList = new Array();
    state ={
        image:null
    };

    constructor(props)
    {
        super(props);
    }
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.imagesList.push(result.uri)
            this.setState({ image: result.uri });
        }
    };
    render(){
        return(

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        title="Pick an image from camera roll"
                        onPress={this.pickImage}
                    />
                    {this.imagesList.map(image=>{
                        return(
                        <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />);
                    })
                    })  

                </View>

           )

    }
}

const styles = StyleSheet.create({

    container:{
        width:200
    }
})







