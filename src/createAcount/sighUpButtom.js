import {Actions} from "react-native-router-flux";
import {Text, TouchableOpacity} from "react-native";
import React from "react";




const SighUpButtom=()=>{

    return(
        <TouchableOpacity onPress={() => Actions.sighUp()} style={styles.signUp}>
            <Text> Sigh up</Text>
            </TouchableOpacity>


    )
}

const styles = {
    signUp:{
        fontSize: 15,
        alignItems: 'center',
        backgroundColor:'#59cbbd',
        alighSelf: 'stretch',
        marginTop: 100,
        padding: 20
    },
    textSighUp:{

    }
}

export  default SighUpButtom;