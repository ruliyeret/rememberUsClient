import React from 'react';
import Header from './src/Common/header/Header'
import firebase from 'firebase'
import LoginForm from "./src/Authentication/login";
import {View} from 'react-native'
import Spinner from "./src/Common/spiner";
import CardSection from "./src/Common/card/Card-Section";
import Button from "./src/Common/Button/Button";


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
                        <h1>wellcom ruli</h1>
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
            <View>
                <Header  headerText = "התחברות"></Header>
                {this.renderContent()}
            </View>
        );
    }
}


