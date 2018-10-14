import React from 'react';
import Header from '../Common/header/Header'
import firebase from 'firebase'
import LoginForm from "./login";

import Spinner from "../Common/spiner";
import SighUpButtom from "../createAcount/sighUpButtom";
import {View} from "react-native";




export default class Login extends React.Component {


    constructor(){
        super();
        this.state = {loggedIn:false}
    }
    // componentWillMount() {
    //     console.log("here")
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyDDtUVObGxtgsoXwS-hgHCnV_qs_4uUk0I",
    //         authDomain: "liveforme-770fd.firebaseapp.com",
    //         databaseURL: "https://liveforme-770fd.firebaseio.com",
    //         projectId: "liveforme-770fd",
    //         storageBucket: "liveforme-770fd.appspot.com",
    //         messagingSenderId: "1021849337183"
    //
    //     });
    //
    //     console.log("here")
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             console.log("true")
    //             this.setState({loggedIn: true});
    //         } else {
    //             console.log("false")
    //             this.setState({loggedIn: false});
    //         }
    //     });
    // }
    // renderContent(){
    //     console.log("get in functgion that ask the switch case")
    //     switch (this.state.loggedIn) {
    //         case true:
    //             return (
    //           <P></P>
    //         );
    //         case false:
    //             console.log("Get log page")
    //             return <LoginForm/>;
    //         default:
    //             return <Spinner size="large"/>;
    //     }
    // }
    render() {
        return (
           <LoginForm/>
        );
    }
}
const styles = {
    container:{
        flex:1

    },
    Header:{
        flex:1
    },
    Body:{
        flex:1
    },
    Down:{
        flex:1
    }

}







// export default class Login extends React.Component {
//
//     constructor(){
//         super();
//         this.state = {loggedIn:null}
//     }
//     componentWillMount() {
//         console.log("here")
//         firebase.initializeApp({
//             apiKey: "AIzaSyDDtUVObGxtgsoXwS-hgHCnV_qs_4uUk0I",
//             authDomain: "liveforme-770fd.firebaseapp.com",
//             databaseURL: "https://liveforme-770fd.firebaseio.com",
//             projectId: "liveforme-770fd",
//             storageBucket: "liveforme-770fd.appspot.com",
//             messagingSenderId: "1021849337183"
//
//         });
//
//         console.log("here")
//         firebase.auth().onAuthStateChanged((user) => {
//             if (user) {
//                 console.log("true")
//                 this.setState({loggedIn: true});
//             } else {
//                 console.log("false")
//                 this.setState({loggedIn: false});
//             }
//         });
//     }
//     renderContent(){
//         console.log("get in functgion that ask the switch case")
//         switch (this.state.loggedIn) {
//             case true:
//                 return (
//                     {/*<CardSection>*/}
//             {/*<Button onPress={() => firebase.auth().signOut()}>*/}
//             {/*Log Out*/}
//             {/*</Button>*/}
//
//                 // {/*</CardSection>*/}
//             );
//             case false:
//                 console.log("Get log page")
//                 return <LoginForm/>;
//             default:
//                 return <Spinner size="large"/>;
//         }
//     }
//     render() {
//         return (
//             this.renderContent()
//         );
//     }
// }
// const styles = {
//     container:{
//         flex:1
//     },
//     Header:{
//         flex:1
//     },
//     Body:{
//         flex:1
//     },
//     Down:{
//         flex:1
//     }
//
// }
//


