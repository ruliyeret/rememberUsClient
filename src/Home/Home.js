import HeaderApp from "./Header";
import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from "react-native";
import {BaseNavigator} from "./BaseNavigator";
import Gallery from "react-native-image-gallery";
import {Actions} from "react-native-router-flux";


export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedTab: 'profile'
        }
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    toggleSideMenu () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggelMenu() {

        if (this.state.isOpen) {
            let data = ['setting', 'about us', 'help','logout'];
            return (<View>
                {data.map(e => {
                    return (<Text style={styles.item}>{e}</Text>);
                })}
            </View>);
        } else {
            return (<View/>)
        }
    }
// <HeaderApp func = {this.toggleSideMenu.bind(this)}></HeaderApp>
// {this.toggelMenu()}

    openGallery(){
        console.log("here")
        Actions.galleryPage();
    }
    render() {



        return (
            <View style={{
                flex: 1,
                backgroundColor: 'grey'
            }}>
                 <HeaderApp func = {this.toggleSideMenu.bind(this)}></HeaderApp>
                 {this.toggelMenu()}
                <TouchableHighlight onPress={this.openGallery}>
                <Image
                    style={{width: 80, height: 80}}
                    source={require('../images/images.jpg')}
                />
                </TouchableHighlight>


                <BaseNavigator/>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 30,
    },
})
