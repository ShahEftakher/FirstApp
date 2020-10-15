import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const games = [
    { name: "Valorant", key: "1" },
    { name: "R6", key: "2" },
    { name: "CSGO", key: "3" },
    { name: "FIFA 20", key: "4" },
    { name: "Horizon Zero Dawn", key: "5" },
    { name: "Tomb Raider", key: "6" },
    { name: "GTA V", key: "7" },
    { name: "Age of Villagers", key: "8" },
    { name: "Aim Lab", key: "9" },
  ];
  //what if there are multiple lists how will the item know who to picl
  //oh wait! it will just take the elements of data
  //name can be anything ig
  return (
    <View style={style.viewStyle}>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={games}
        renderItem={function ({ item }) {
          return <Text style={style.textStyle}>{item.name}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontStyle: "normal",
    fontSize: 40,
    fontWeight: "700",
    color: "maroon",
    marginVertical: 30,
  },
  viewStyle: {
    backgroundColor: "mediumpurple", //how to change the whole screen background color??
    //rn only the view with the list length is changing
    borderColor: "plum",
    borderWidth: 5,
  },
});

export default ListScreen;
