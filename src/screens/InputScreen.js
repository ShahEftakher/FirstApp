import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import { Picker } from "@react-native-community/picker";

const InputScreen = () => {
  let [currentInput, setCurrentInput] = useState("");
  let [finalInput, setFinalInput] = useState("");
  let [isTrue, setisTrue] = useState(true);
  let [language, setLanguage] = useState(true);
  return (
    <View>
      <Text style={styles.textStyle}>Input Screen</Text>
      <Text></Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={"Input name"}
        onChangeText={function (currentText) {
          setCurrentInput(currentText);
        }}
        onSubmitEditing={function () {
          setFinalInput(currentInput);
        }}
        secureTextEntry={true}
      ></TextInput>
      <Text style={styles.textStyle}>{currentInput}</Text>
      <Text style={styles.textStyle}>{finalInput}</Text>
      <Switch
        value={isTrue}
        onValueChange={function () {
          if (isTrue === false) {
            setisTrue(true);
          } else {
            setisTrue(false);
          }
          console.log(isTrue);
        }}
      ></Switch>
      {isTrue ? (
        <Text styles={styles.textStyle}>True</Text>
      ) : (
        <Text style={styles.textStyle}>False</Text>
      )}
      <Picker
        mode="dialogue"
        onValueChange={
            function(itemValue, itemIndex){
                setLanguage(itemValue);
            }
        }
        selectedValue={language}
      >
        <Picker.Item label="En" value="English"></Picker.Item>
        <Picker.Item label="Bn" value="Bangla"></Picker.Item>
        <Picker.Item label="esp" value="Espaniol"></Picker.Item>
        <Picker.Item label="lat" value="Latin"></Picker.Item>
        <Picker.Item label="Hn" value="Hindi"></Picker.Item>
      </Picker>
    <Text style={styles.textStyle}>{language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
    alignSelf: "center",
    alignItems: "center",
  },

  inputStyle: {
    borderColor: "red",
    borderWidth: 2,
    padding: 10,
  },
});

export default InputScreen;
