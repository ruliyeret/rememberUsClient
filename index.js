import React from 'react';
import Header from './src/Common/header/Header'
import firebase from 'firebase'
import LoginForm from "./src/Authentication/login";
import {View} from 'react-native'
import Spinner from "./src/Common/spiner";
import CardSection from "./src/Common/card/Card-Section";
import Button from "./src/Common/Button/Button";
import SighUpButtom from "./src/createAcount/sighUpButtom";



export default class Login extends React.Component {

    constructor(){
        super();
        this.state = {loggedIn:null}
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDDtUVObGxtgsoXwS-hgHCnV_qs_4uUk0I",
            authDomain: "liveforme-770fd.firebaseapp.com",
            databaseURL: "https://liveforme-770fd.firebaseio.com",
            projectId: "liveforme-770fd",
            storageBucket: "liveforme-770fd.appspot.com",
            messagingSenderId: "1021849337183"

        });


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }
    renderContent(){
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>

                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header  styles={styles.Header} headerText = "התחברות"></Header>
                <View styles={styles.Body}>
                {this.renderContent()}
                </View>
                <SighUpButtom style={styles.Down}></SighUpButtom>
            </View>
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

