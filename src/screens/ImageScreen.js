import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImageDetails from "../components/ImageDetail";


const ImageScreen = () =>{
    return(
        <View>
            <ImageDetails
            title="Game1"
            ></ImageDetails>
            <ImageDetails
            title="Game2"
            ></ImageDetails>
            <ImageDetails
            title="Game3"
            ></ImageDetails>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle:{
        fontSize: 30,
    }
});

export default ImageScreen