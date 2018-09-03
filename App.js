import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Test from "./routeTest"

import Login from "./index";
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
                        key="gray"
                        component={Test}
                        title="sigh up"

                    >
                    </Scene>
                </Scene>
            </Router>
        );
    }
}


