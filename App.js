import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from "./index";
import SignUpView from "./src/createAcount/Sigh-Up-View";
import Home from "./src/Home/home";
import AcountOptions from "./src/AcountOptions/AcountOptionsWithReactElements";
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
                        title="free acount"

                    >
                    </Scene>
                    <Scene
                        key="Home"
                        component={Home}
                        title="Home"

                    >
                    </Scene>
                </Scene>
            </Router>
        );
    }
}


