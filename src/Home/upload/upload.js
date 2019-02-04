import React from 'react';
import {AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native'
import {Image} from 'react-native'
import {Button, Header} from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {Actions} from "react-native-router-flux";
import ImageClass from "../galary/image/image";
import {RestApi} from "../RestApi/RestApi";
export class Upload extends  React.Component<>{

    constructor(props){
        super(props);
        this.state = {
            image: null,
            informationText:"",
            description:"",
            location:"jerusalem",
            tagPeople:[]

        };
    }

    async saveImageToDb(){


        if(this.props.tagPersonArr){
                this.state.tagPeople = this.props.tagPersonArr;
        }
        if(this.props.location){
            this.state.location = this.props.location;
        }
        let personId = await AsyncStorage.getItem("personId");
        let image = new ImageClass(0,this.props.image,this.state.description,this.state.location,this.state.tagPeople,personId);

          RestApi.uploadImage(image);
          console.log("action start")
         Actions.HomePage({refresh:"ruli"});

    }





    render(){

        return (

            <KeyboardAvoidingView style={{ flex: 1 }}>
                <Header leftComponent={  <TouchableOpacity onPress={()=>Actions.HomePage()}>
                                            <Icon name = "cross"  color = "black" size  = {25} />
                                        </TouchableOpacity>}
                        rightComponent ={ <TouchableOpacity onPress={()=>{this.saveImageToDb()}}>
                                             <Icon name = "upload" color = "black" size  = {25} />
                                         </TouchableOpacity>}/>

                <View style={{flex :4,justifyContent: 'space-around',
                    alignItems: 'center',flexDirection: 'row',}} >
                      <View style={{top:'2%'}}><Image source={{ uri: this.props.image }} style={{ width: 345, height: 315 }} /></View>
                </View>

                 <KeyboardAvoidingView  style={{flex:1}} behavior="padding">
                    <TextInput
                        autoFocus={true}
                        style={{borderColor:'grey',borderWidth:2,borderBottom:20,height:60}}
                        underlineColorAndroid = "transparent"
                        placeholder = " Write a caption..."
                        placeholderTextColor = "black"
                        autoCapitalize = "none"
                        value={this.state.informationText}
                        onChange={(text) => this.setState({informationText: text})}
                        underlineColorAndroid='transparent'
                        onSubmitEditing={(event) => {
                            this.setState({description:event.nativeEvent.text});
                        }}
                    />

                </KeyboardAvoidingView>
                <View style={{flex:1}}>
                    <Button
                        title="Add Location"
                    />
                </View>
                <View style={{flex:1}}>
                    <Button
                        title="Tag People"
                        onPress={()=>Actions.tagPeople({image:this.props.image})}
                    />
                </View>

            </KeyboardAvoidingView>
        );
    }



}