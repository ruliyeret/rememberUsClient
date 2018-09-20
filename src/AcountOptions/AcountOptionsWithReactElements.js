import {Component} from "react";
import { PricingCard } from 'react-native-elements'
import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";
import {Actions} from "react-native-router-flux";

class AcountOptions extends Component {


    render(){
        return(
            <ScrollView>

                <View>
                <PricingCard style={styles.acount}
                             color='#4f9deb'
                             title='Free'
                             price='$0/mo'
                             info={['10 User', '2GB of storage', 'Email support','Help center acsess']}
                             button={{ title: 'GET STARTED', icon: 'add-shopping-cart' }}
                             onButtonPress={()=>{Actions.sighUpFree()}}
                ></PricingCard>
                </View>

                <View>
                <PricingCard style={styles.acount}
                             color='#4f9deb'
                             title='Pro'
                             price='$15/mo'
                             info={['10 User', '10GB of storage', 'Email support','Help center acsess']}
                             button={{ title: 'GET STARTED', icon: 'add-shopping-cart' }}
                             onButtonPress={()=>{Actions.sighUpFree()}}
                            >

                </PricingCard>

                </View>
                <View>
                    <PricingCard style={styles.acount}
                                 color='#4f9deb'
                                 title='Enterprise'
                                 price='$29/mo'
                                 info={['30 User', '30GB of storage', 'Phone and Email support','Help center acsess']}
                                 button={{ title: 'GET STARTED', icon: 'add-shopping-cart' }}
                                 onButtonPress={()=>{Actions.sighUpFree()}}
                    ></PricingCard>
                </View>
    </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: 'column'
    },
    acount:{
        height:100
    }

})

export default AcountOptions