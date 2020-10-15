import React from "react";
import {Text, View, Image, StyleSheet} from "react-native"

const ImageDetails = (props) => {
    return(
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle:{
        fontSize:20,
        color: "blue"
    }
})

export default ImageDetails;