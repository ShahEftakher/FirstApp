import React from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

const StorageScreen = () => {

  const setData = async(key, value)=>{
    try{
      await AsyncStorage.setItem(key,value);
      alert("Data saved successfully!");

    }catch(error){
      alert(error);
    }
  }

  const setDataJSON = async(key, value)=>{
    try{
      const newData=JSON.stringify(value);
      await AsyncStorage.setItem(key,newData);
      console.log("Data saved successfully!");

    }catch(error){
      alert(error);
    }
  }


  const getData = async(key)=>{
    try {
      const data = await AsyncStorage.getItem(key);
      if(data!=null){
        alert(data);
      }else{
        alert("No data assigned to this key");
      }
    } catch (error) {
      alert(error);
    }
  }

  const getDataJSON = async(key)=>{
    try {
      let data = await AsyncStorage.getItem(key);
      if(data!=null){
        data=JSON.parse(data);
        console.log(data);
      }else{
        console.log("No data assigned to this key");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeData = async(key)=>{
    try {
      await AsyncStorage.removeItem(key);
      console.log("data removed successfully");
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>
      <Text>Storage Screen</Text>
      <Button title="Save data" onPress={function () {
        setDataJSON("CourseInfo",{ID: "SWE 4637", Program: "SWE", CourseName:"Web and mobile app dev"});
      }}></Button>
      <Button title="Retrieve data" onPress={function () {
        getDataJSON("CourseInfo");
      }}></Button>
      <Button title="Remove data" onPress={function () {
        removeData("CourseInfo");
      }}></Button>
    </View>
  );
};

export default StorageScreen;
