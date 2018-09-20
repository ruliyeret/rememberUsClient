import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Modal,
    TouchableHighlight
} from 'react-native';
import {DescriptionOption} from "../description/descriptionOption";
import Description from "../description/description";
import {Actions} from "react-native-router-flux";


class AcountOption extends Component {
    state = {
        modalVisible: false

    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../../wall.jpg')}
                imageStyle={{resizeMode: 'cover'}}
            >
                <View style={styles.container}>
                    <Modal animationType={"slide"} transparent={false}
                           visible={this.state.modalVisible}
                           onRequestClose = {() => { console.log("Modal has been closed.") } }
                    >
                        <View style={styles.modal}>
                            <Text style={styles.text}>Modal is open!</Text>

                            <TouchableHighlight onPress={() => {
                                this.toggleModal(!this.state.modalVisible)
                            }}>

                                <Text style={styles.textInfo}>Close Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <View style={styles.free}>
                       <TouchableOpacity onPress={() => Actions.sighUpFree()}>
                          <Text style={styles.text}>{'FREE \n \n'}</Text>
                       </TouchableOpacity>
                        <Description description={DescriptionOption.freeDescription()} style={styles.textDescription}></Description>
                        <View  style={styles.circel}>
                            <Text onPress = {()=> {this.toggleModal(true)}}> about us</Text>
                        </View>
                    </View>
                    <View style={styles.medium}>
                        <TouchableOpacity onPress={() => Actions.sighUpFree()}>
                        <Text style={styles.text}>{'MEDIUM \n \n'}</Text>
                        <Description description={DescriptionOption.freeDescription()} style={styles.textDescription}></Description>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.premium}>
                        <Text style={styles.text}>{'PREMIUM \n \n'}</Text>
                        <Description description={DescriptionOption.freeDescription()} style={styles.textDescription}></Description>


                    </View>
                </View>
            </ImageBackground>

        );
    }
};

const styles = StyleSheet.create({
     container:{
         flex: 1

     },
    free:{
         flex:1,
    },
    textDescription:{
      fontSize:23,
        // textAlign: "center"
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        padding: 80
    },

    circel:{
        width: 40,
        height: 40,


        borderRadius: 100/2,
        backgroundColor: 'blue'
    },
    medium:{
        flex:1,
    },

    premium:{
        flex:1,
    },
    textInfo:{
        fontSize: 30
    },
    text:{
         fontSize: 42,
         // textAlign:'center',
         top:20
    }
});

export default AcountOption;