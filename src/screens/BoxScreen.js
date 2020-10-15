import React, {useState} from "react"
import {View, Button} from "react-native"



function createRGB(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = "rgb("+red+","+green+","+blue+")";
    return color;
}


const BoxScreen = () =>{
    let [Color, setColor]=useState("rgb(0,250,0)")
    return <View>
        <Button
        title="Change Color"
        onPress = {function(){
            setColor(createRGB());
        }}
        ></Button>

        <View style={{height: 100, width: 100, backgroundColor: Color}}>

        </View>
    </View>
};

export default BoxScreen;