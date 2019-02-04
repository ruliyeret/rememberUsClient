import HeaderApp from "./Header";
import React, { Component } from 'react';
const SideMenu = require('react-native-side-menu').default;
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage
} from "react-native";
import {BaseNavigator} from "../navigation/BaseNavigator";

import {Actions} from "react-native-router-flux";
import ImageClass from "./galary/image/image";
import {RestApi} from "./RestApi/RestApi";
import Menu from "./Menu";



const numColumns = 3;


const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};


export class HomeScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            images:new Array(),
            isOpen: false,
            selectedTab: 'profile',
            isLoading: true,
            soruceImageArr:[],
            imageUriArr:[]

        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }


    toggleSideMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }




    openGallery(imageList,srcImageList,imagePosition){
        Actions.galleryPage({imageList:imageList,srcImageList:srcImageList,position:imagePosition});
    }

    initSrcImageArr(soruceImageArr){
        let srcImageArr = new Array();
        soruceImageArr.forEach(image=>{

            srcImageArr.push({key:{source:{uri:image.source}}})
        });
        return srcImageArr;
    }

    insertPhotoInfoFromDb(responseJson){

        let photoInfoArr = new Array();
        responseJson.map(photo=>{
            photoInfoArr.push(new ImageClass(photo.id,
                                             photo.src,
                                             photo.description,
                                             photo.location,
                                             photo.tagArr))
        })

        return photoInfoArr;
    }

    initImagesUri(photoInfo){
        let imageUriArr = new Array();
        photoInfo.forEach(image=>{

            imageUriArr.push({source:{uri:image.source}})
        });
        return imageUriArr;
    }
   async getPhotoFromDb(){

        console.log("1")
        let personId = await AsyncStorage.getItem("personId");
        console.log(personId)
       console.log("2")
        let dbResult = await RestApi.getGalleryFromDb(personId);
       console.log("3")
        let photoInfo = this.insertPhotoInfoFromDb(dbResult);
       console.log("4")
        let soruceImageArr = this.initSrcImageArr(photoInfo);
        let temp = this.initImagesUri(photoInfo);
        this.setState({
            isLoading: false,
            images: photoInfo,
            soruceImageArr: soruceImageArr,
            imageUriArr:temp
        })
    }
    componentDidMount(){
        console.log("get from photo from db");
        return(this.getPhotoFromDb());
    }

    

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]}/>;
        }


        return (
            <View
                style={styles.item}
            >
                <TouchableOpacity key={item.key}
                                  onPress={() => this.openGallery(this.state.images,this.state.imageUriArr,index)}>
                    <Image
                        style={{width: 120, height: 120}}
                        source={item.key.source}/>
                </TouchableOpacity>
            </View>
        );
    };

    checkRefreshNeeds(){

        console.log(this.props.refresh)
        console.log("refresh function")
        if(this.props.refresh == "ruli"){
            console.log("refresh")
            this.props.refresh="np"
            this.getPhotoFromDb();
        }
    }
    componentWillReceiveProps(props){
        console.log(props.refresh)

    }
    render() {

        this.checkRefreshNeeds();

        if(this.state.isLoading){
            console.log("loading..")
            return(
                <View style={{zIndex:1}}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            )
        }


        return (
            <SideMenu menu={<Menu/>}>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                }}>

                <HeaderApp func = {this.toggleSideMenu.bind(this)}></HeaderApp>
                <FlatList
                    style={{flex:1}}
                    data={formatData(this.state.soruceImageArr, numColumns)}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                />
                    <BaseNavigator/>
                </View>
            </SideMenu>





        )
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
    },
})
