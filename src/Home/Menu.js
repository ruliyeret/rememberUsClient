import {Header, ListItem} from 'react-native-elements'
import {View,AsyncStorage} from "react-native";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/Entypo";
import React from "react";

const list = [

    {
        title: 'Log out',
        icon: <Icon name="log-out"></Icon>
    },

]


const navigationChoice = async (title)=>{
    console.log(title)
    switch (title) {
        case ("Log out"):{
            let keys = ["userName","password","personId"];
            await AsyncStorage.multiRemove(keys, (err) => {
                if(!err){
                    Actions.login();
                }
            });

        }
    }
}
const Menu =()=>{

    return(<View>
            <Header
                centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
            />

            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={item.icon}
                        onPress={()=>navigationChoice(item.title)}
                    />
                ))
            }
        </View>

    )
}
export default Menu;