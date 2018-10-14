import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AcountOption from "./src/AcountOptions/AcountOption"
import Login from "./src/Authentication/Autontication";
import SignUpView from "./src/createAcount/Sigh-Up-View";
import Home, {HomeScreen} from "./src/Home/Home";
import AcountOptions from "./src/AcountOptions/AcountOptionsWithReactElements";
import HeaderApp from "./src/Home/Header";
import {GallerySlide} from "./src/Home/galary/galarySlide"
export default class App extends React.Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login"
                           component={Login}
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
                        key="sighUpFree"
                        component={SignUpView}
                        title="create acount"

                    >
                    </Scene>

                    <Scene
                        key="HomePage"
                        component={HomeScreen}
                        title="Home"

                    >
                    </Scene>
                    <Scene
                        key="galleryPage"
                        component={GallerySlide}
                        title="gallery"

                    >
                    </Scene>
                </Scene>
            </Router>
        );
    }
}


