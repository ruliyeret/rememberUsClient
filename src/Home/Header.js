import {Header,Icon} from "react-native-elements";
import React from "react";
import MenuComponent from "./try";
import {StyleSheet, Text, View} from "react-native";


const open =(fun)=>{
   fun()
}

const HeaderApp =(props)=>{

        return (
             <Header leftComponent={{icon:'menu', onPress:()=>open(props.func), color :'#fff'}}
                    centerComponent={{text: "Remember Us", style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: "#fff"}}/>
        );
}

export default  HeaderApp;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,


    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})