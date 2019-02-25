import React, { Component } from "react";
import { View, Text } from "react-native";
import { TabNavigator } from "react-navigation";
import NewsScreen from "../news";
import BooksScreen from "../book";
import { color } from "../../../assets";

export default TabNavigator(
  {
    News: { screen: NewsScreen },
    Books: { screen: BooksScreen }
  },
  {
    tabBarLabel: { tintColor: color.quarternary },
    tabBarOptions: {
      style: { backgroundColor: color.quinary },
      labelStyle: { color: color.white, fontSize: 16, fontWeight: "bold" }
    }
  },
  { animationEnabled: false, swipeEnabled: true }
);
