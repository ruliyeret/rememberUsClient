import React, {Component} from 'react';
import { ImagePicker } from 'expo';
import {Actions} from "react-native-router-flux";
import {TouchableOpacity, View} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";


class AddButton extends Component {

    constructor(props){
        super(props);
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            console.log("this is the image " + result.uri);
            Actions.upload({image:result.uri})
        }
    };
    render() {

        return (
            <View>
                <TouchableOpacity onPress={()=>{this._pickImage()}}>
                    <Icon
                        name="plus"
                        color={"green"}
                        size={24}
                    />
                </TouchableOpacity>

            </View>
           )}
}

export {AddButton};