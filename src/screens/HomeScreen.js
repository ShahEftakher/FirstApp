import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ListScreen from "./ListScreen";

const HomeScreen = (props) => {
  const dim = Dimensions.get("window");
  console.log("Height: " + dim.height);
  console.log("Width: " + dim.width);
  //alert(dim.height + " " + dim.width);

  return (
    <View>
      <Text style={style.textStyle}>First App!</Text>
      <Button
        title="Go to List"
        onPress={function () {
          props.navigation.navigate("ListPage");
        }}
      ></Button>
      <TouchableOpacity
        onPress={function () {
          console.log("Image touched");
        }}
      >
        <Image source={require("./../../assets/notBad.png")} style={{}}></Image>
      </TouchableOpacity>
      <Button
        title="Images"
        onPress={function () {
          props.navigation.navigate("ImagePage");
        }}
      ></Button>
      <Button
        title="Storage"
        onPress={function () {
          props.navigation.navigate("Storage");
        }}
      ></Button>
      <Button
        title="StateScreen"
        onPress={function () {
          props.navigation.navigate("State");
        }}
      ></Button>
      <Button
        title="Box Screen"
        onPress={function () {
          props.navigation.navigate("Colored Box");
        }}
      ></Button>

      <Button
        title="Input Screen"
        onPress={function () {
          props.navigation.navigate("Input Screen");
        }}
      ></Button>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;
