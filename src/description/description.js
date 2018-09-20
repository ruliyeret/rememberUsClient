
import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
const Description = (props)=>{

    return(
        <View>
            <Text style={styles.container}>{props.description}</Text>
        </View>
    );

}
const  styles = StyleSheet.create({

    container:{

        fontSize:18,

    }
});

export default Description;