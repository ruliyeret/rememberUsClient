import React  from 'react'
import Gallery from "react-native-image-gallery";
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialIcons"
import ViewLocation from "./image/photoView/locationView"
import PhotoHeader from "./image/photoView/photoHeader";
import {RestApi} from "../RestApi/RestApi";
import ViewDescription from "./image/photoView/viewDescription";
import PhotoPlugin from "./image/photoView/photoPlugin";
import {Header} from "react-native-elements";



export class GallerySlide extends React.Component<> {

    constructor(props) {
        super(props);

        this.panResponder;
        this.state={
            eye:"red",
            imageNumber:0,
            info:"red",
            positionAbsolute:true,
            editLocation:false,
            editInfo:false,
            editTag:false,
            photoInformation:[],
            displayPhotoInfo:false,
            displayLocation:false,
            displayTag:false,
            displayInfo:false,
            locationX: 0,
            locationY: 0,
            tagOn:true,
            tagInput:"?"
        }
    }

    initState(event){
        console.log("init state");
        this.setState({
            eye:"red",
            info:"red",
            positionAbsolute:true,
            editLocation:false,
            editInfo:false,
            photoInformation:this.props.imageList,
            displayPhotoInfo:false,
            displayLocation:false,
            displayTag:false,
            displayInfo:false,
            locationX: 0,
            locationY: 0,
            tagOn:true,
            editTagText:"",
            imageNumber:event.position
        });
    }
    displayPhotoInfo(e){
        this.setState({displayPhotoInfo:true})
    }


    setLocation(){
        if(!this.state.editLocation) {
            this.setState({editLocation: true})
        }
        else {this.setState({editLocation:false})}
    }
    setInfo(){
        if(this.state.editInfo) {
            this.setState({editInfo:false});
        }
        else {
            this.setState({editInfo: true})}

    }
    setTag(){
        if(this.state.editTag) {
            this.setState({editTag:false});
        }
        else {
            this.setState({editTag: true})}
    }

    componentWillMount(){

        this.panResponder = PanResponder.create(
            {
                onStartShouldSetPanResponder: (event, gestureState) => false,

                onStartShouldSetPanResponderCapture: (event, gestureState) => this.state.tagOn,

                onMoveShouldSetPanResponder: (event, gestureState) => false,

                onMoveShouldSetPanResponderCapture: (event, gestureState) => false,

                onPanResponderGrant: (event, gestureState) => false,

                onPanResponderMove: (event, gestureState) => false,

                onPanResponderRelease: (event, gestureState) =>
                {
                    let x = event.nativeEvent.locationX.toFixed(2);
                    let y = event.nativeEvent.locationY.toFixed(2);

                    if(this.state.editTag) {
                        this.setState({
                            editTagText: "",
                            locationX: event.nativeEvent.locationX.toFixed(2),
                            locationY: event.nativeEvent.locationY.toFixed(2),
                        });
                    }
                }
            });
        this.state.photoInformation = this.props.imageList;
        this.setState({imageNumber:this.props.position})


    }
    onEyePress(){
        if(this.state.info == "red") {
            if (this.state.eye == "red") {
                this.setState({ eye: "green", displayPhotoInfo: true})
            } else {
                this.setState({ eye: "red", displayPhotoInfo: false})
            }
            this.showTags();
        }

    }

    async onSubmitEditInfo(description){
        this.state.photoInformation[this.state.imageNumber].description = description;
        await RestApi.onSubmitEditInfo(this.state.imageNumber,description);
        this.setState({editInfo:false})
    }
    async onSubmitLocation(location){
        this.state.photoInformation[this.state.imageNumber].location = location;
        await RestApi.onSubmitLocation(this.state.imageNumber,location);
        this.setState({editLocation:false})
    }

     onSubmitEditTag(person,locationX,locationY){
        RestApi.onSubmitTags(this.state.photoInformation[this.state.imageNumber].id,person,locationX,locationY);
    }
    editLoc(){
        let editLocationElement = <View/>;
        if(this.state.editLocation){
            editLocationElement  =
                <View style={styles.editLocationContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/location'}}/>
                    <TextInput style={styles.locationInputs}
                               placeholder="Location"
                               underlineColorAndroid='transparent'
                               onSubmitEditing = {(event)=>{this.onSubmitLocation(event.nativeEvent.text)}}
                    />
                </View>
        }

        return editLocationElement;
    }
    editInfo(){
        let editInfoElement = <View/>;
        if(this.state.editInfo){
            editInfoElement  =

                <View style={styles.editInfo}>
                    <TextInput style={styles.locationInputs}
                               placeholder="Description"
                               underlineColorAndroid='transparent'
                               onSubmitEditing = {(event)=>{this.onSubmitEditInfo(event.nativeEvent.text)}}
                    />
                </View>

        }

        return editInfoElement;
    }
    editTagPeople(){
        let tags = <View/>
        if(this.state.editTag) {
            tags = (<View style={[styles.point,
                {top: parseFloat(this.state.locationY - 15),zIndex:3, left: parseFloat(this.state.locationX - 15)}]}>
                <Icon style={styles.inputIcon} name = "person-add" color="white" size={25}/>
                <TextInput
                    placeholder="who is?"
                    underlineColorAndroid='transparent'
                    style={{ zIndex:1,color:'white'}}
                    value={this.state.editTagText}
                    onChange={(text) => this.setState({editTagText:text})}
                    onSubmitEditing = {(event)=>{this.onSubmitEditTag(event.nativeEvent.text,this.state.locationX,this.state.locationY)}}>
                </TextInput>
            </View>)
        }



        return tags;

    }
    showTags(){
        let tagsElement = [];
        if(this.state.eye == "green") {
            this.state.photoInformation[this.state.imageNumber].tagArr.map(tag => {

                tagsElement.push(<View><Text style={[{
                    zIndex:2,
                    color:"white",
                    top: parseFloat(tag.locationY- 15),
                    left: parseFloat(tag.locationX- 15),
                }, styles.tagPerson]}>{tag.name}</Text></View>);
            })
        }


        return (tagsElement);


    }
    onEditPress(){
        if(this.state.eye == "red") {
            this.state.info == "red" ? this.setState({info: "green", displayPhotoInfo: false, displayInfo: true}) :
                this.setState({info: "red", displayPhotoInfo: false, displayInfo: false, editLocation:false,editTag:false})
        }
    }

    getGallery() {

        if (this.state.editTag) {
            return (<View  {...this.panResponder.panHandlers} behavior="padding" style={{position: 'absolute'}}>
                <Gallery
                    style={{zIndex: 1}}
                    initialPage={this.state.imageNumber}
                    images={this.props.srcImageList}
                />
            </View>);
        }else {
            return (
                <Gallery
                    style={{zIndex: 1, position: 'absolute'}}
                    initialPage={this.state.imageNumber}
                    images={this.props.srcImageList}
                    onPageScroll={(event)=>this.initState(event)}
                />
            );
        }


    }

    render(){


        return(
            <View  style={{ flex: 1, backgroundColor: '#191919' }}>

                <PhotoHeader info ={this.state.info} eye={this.state.eye}
                             onEditPress={this.onEditPress.bind(this)}
                             onEyePress={this.onEyePress.bind(this)}
                />

                {this.editLoc()}
                {this.editInfo()}
                {this.editTagPeople()}
                {this.showTags().map(element=>{return element})}

                <ViewLocation location = {  this.state.photoInformation[this.state.imageNumber].location } displayPhotoInfo = {this.state.displayPhotoInfo}></ViewLocation>

                <PhotoPlugin displayInfo = {this.state.displayInfo}
                             setTag={this.setTag.bind(this)}
                             setLocation = {this.setLocation.bind(this)}
                             setInfo={this.setInfo.bind(this)}/>


                {this.getGallery()}




                <ViewDescription description = {  this.state.photoInformation[this.state.imageNumber].description } displayPhotoInfo = {this.state.displayPhotoInfo}></ViewDescription>
            </View>

        );
    }
}

{/*<ViewDescription desc = {this.state.photoInformation[this.props.position].description } displayPhotoInfo = {this.state.displayPhotoInfo}></ViewDescription>*/}
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
    tagPerson:{
        width:'15%',
        textAlign:'center',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'transparent',
        color: '#fff',
        backgroundColor : '#0d0d0d',
    },

    editInfo:{
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        width:'80%',
        top:'14%',
        left:'15%',
        height:"10%",
        zIndex:2,
        position:'absolute',
        marginBottom:45,
        flexDirection: 'row',
        alignItems:'center'
    },
    editLocationContainer: {
        top:'14%',
        left:'15%',
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        position:'absolute',
        zIndex:2,
        marginBottom:45,
        flexDirection: 'row',
        alignItems:'center'
    },
    viewLocation:{
        width:'45%', alignItems: 'center',left:"30%", top:"10%"
    },
    textInfo:{
        textAlign:'center',
        zIndex:1,
        bottom:'20%',
    },
    hideInfo:{
        display:'none'
    },
    inputs:{
        zIndex:1,
        borderBottomColor: '#FFFFFF',

    },
    infoIcon :{
        left:'90%',
    },
    inputIcon:{
        width:30,
        height:30,
        color:'white',
        marginLeft:12,
        justifyContent: 'center'
    },
    point: {
        backgroundColor:'transparent',
        zIndex:1,
    },
    locationIcon :{
        left:'45%',
        bottom: '0%'
    },

})
//
// /sds

