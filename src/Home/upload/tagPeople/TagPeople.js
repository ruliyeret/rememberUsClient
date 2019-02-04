
import React from 'react';
import {Image, PanResponder, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Header} from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import {Actions} from "react-native-router-flux";
import {Tag} from "../../galary/image/image";

export class TagPeople extends  React.Component<>{

    constructor(props){
        super(props);
        this.panResponder;
        this.state={
            tagPersonArr:[],
            locationX:0,
            locationY:0,
            editTagText:"",
            photoPress:false
        }


    }
    editTagPerson(){
        let  tags = <View/>;
        if(this.state.photoPress) {
            tags =
                (<View style={{
                    top: parseFloat(this.state.locationY - 15),
                    zIndex: 2,
                    left: parseFloat(this.state.locationX - 15),
                    backgroundColor: 'transparent',
                }}>
                    <Icon style={styles.inputIcon} name="person-add" color="white" size={25}/>
                    <TextInput
                        autoFocus={true}
                        placeholder="who is?"
                        underlineColorAndroid='transparent'
                        style={{zIndex: 1, color: 'white'}}
                        value={this.state.editTagText}
                        onChange={(text) => this.setState({editTagText: text})}
                        onSubmitEditing={(event) => {
                            this.onSubmitEditTag(event.nativeEvent.text, this.state.locationX, this.state.locationY)
                        }}>
                    </TextInput>
                </View>)
        }

        return tags;
    }
    onSubmitEditTag(person,locationX,locationY){
        this.setState({editTagText:"",photoPress:false})
      this.state.tagPersonArr.push(new Tag(person,locationX,locationY));
    }
    onTouchEvent(name, ev) {
        this.setState({photoPress:true,locationX:ev.nativeEvent.locationX,locationY:ev.nativeEvent.locationY});
    }

    render(){

        return(
            <View style={{flex:1}}>


                <Header
                    leftComponent={  <TouchableOpacity onPress={()=>Actions.upload()}>
                                        <Icon name = "cross"  color = "black" size  = {25} />
                                    </TouchableOpacity>}
                    centerComponent={{text:'Tag People',style:{color:'white'}}}
                    rightComponent ={ <TouchableOpacity onPress={()=>Actions.upload({tagPersonArr:this.state.tagPersonArr})} >
                                          <Icon name = "save" color = "black" size  = {25} />
                                      </TouchableOpacity>}/>
                {this.editTagPerson()}

                <View
                    style={{position:'absolute',top:'10%',left:'7%'}}
                    onStartShouldSetResponder={(ev) => true}
                    // onMoveShouldSetResponder={(ev) => false}
                    onResponderGrant={this.onTouchEvent.bind(this, "onResponderGrant")}
                    // onResponderReject={this.onTouchEvent.bind(this, "onResponderReject")}
                    onResponderMove={this.onTouchEvent.bind(this, "onResponderMove")}
                    // onResponderRelease={this.onTouchEvent.bind(this, "onResponderRelease")}
                    // onResponderTerminationRequest={(ev) => true}
                    // onResponderTerminate={this.onTouchEvent.bind(this, "onResponderTerminate")}
                    >

                    <Image source={{ uri:  this.props.image}}
                           style={{ alignSelf:'center',height:300,width:310}}
                    />

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputIcon:{
        width:30,
        height:30,
        color:'white',
        marginLeft:12,
        justifyContent: 'center'
    }
});
