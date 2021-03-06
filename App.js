import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from "./src/Authentication/Autontication";
import SignUpView from "./src/createAcount/Sigh-Up-View";
import  {HomeScreen} from "./src/Home/home";
import AcountOptions from "./src/AcountOptions/AcountOptionsWithReactElements";
import {GallerySlide} from "./src/Home/galary/galarySlide"
import {Upload} from "./src/Home/upload/upload";
import {TagPeople} from "./src/Home/upload/tagPeople/TagPeople";
import DeceasedForm from "./src/createAcount/DeceasedForm";
import UserForget from "./src/Authentication/UserForget";
import LoginHelp from "./src/Authentication/LoginHelp";
import AccessAccount from "./src/Authentication/AccessAccount";



export default class App extends React.Component {


    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login"
                           component={Login}
                           hideNavBar={true}
                           initial
                    >
                    </Scene>
                    <Scene
                        key="sighUp"
                        component={AcountOptions}
                        title="sigh up"


                    >
                    </Scene>

                    <Scene
                        key="upload"
                        component={Upload}
                        title="upload"
                        hideNavBar={true}


                    >
                    </Scene>
                    <Scene
                        key="sighUpFree"
                        component={SignUpView}
                        title="create acount"

                    >
                    </Scene>



                    <Scene
                        key="deceasedForm"
                        component={DeceasedForm}
                        title="Deceased Details"

                    >
                    </Scene>


                    <Scene
                        key="userForget"
                        component={UserForget}
                        title="forget details"
                    >
                    </Scene>
                    <Scene
                        key="loginHelp"
                        component={LoginHelp}
                        title="Login Help"
                    >
                    </Scene>
                    <Scene
                        key="accessAccount"
                        component={AccessAccount}
                        title="Access your account"

                    >
                    </Scene>


                    <Scene
                        key="tagPeople"
                        component={TagPeople}
                        title="create acount"
                        hideNavBar={true}


                    >
                    </Scene>

                    <Scene
                        key="HomePage"
                        component={HomeScreen}
                        title="Home"
                        hideNavBar={true}



                    >
                    </Scene>
                    <Scene
                        key="galleryPage"
                        component={GallerySlide}
                        hideNavBar={true}
                    >
                    </Scene>
                </Scene>
            </Router>
        );
    }
}


