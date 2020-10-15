import React, {useState} from "react";
import {View, StyleSheet, Text, Button} from "react-native"

const StateScreen = ()=>{
    let [counter, setCounter]= useState(0);
    return <View>
        <Text style = {styles.textStyle}>{counter}</Text>
        <Button
        title="Increase"
        onPress = {function(){
           setCounter( counter+1);
        }}
        color="green"
        ></Button>
        <Button
        title = "Decrease"
        onPress = {function(){
            setCounter(counter-1);
        }}
        color="red"
        >
        </Button>
    </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color: "red"
    }
});

export default StateScreen;


///Array Destructuring

//Usestate Function returns two elements. One variable and one function