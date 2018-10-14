import React  from 'react'
import Gallery from "react-native-image-gallery";
import {Icon} from "react-native-elements";
import {View} from "react-native";
import {Actions} from "react-native-router-flux";

export class GallerySlide extends React.Component {

    constructor(props) {
        super(props);

    }
    goHomePage(){
        Actions.HomePage();

    }
    render(){

        return(

            <View     style={{ flex: 1, backgroundColor: 'black' }}
            >
                <Icon
                    name='close'
                    color='white'
                    onPress={() => {this.goHomePage}}/>
                <Gallery

                    images={[
                        { source: require('../../images/images.jpg'), dimensions: { width: 150, height: 150 } },
                        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                        { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                        { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                        { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                    ]}
            />
            </View>
            );
    }


}