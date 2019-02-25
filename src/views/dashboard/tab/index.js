import React, { Component } from "react";
import { View, Text } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import NewsScreen from "../news";
import BooksScreen from "../book";
import Details from "../details";
import { color } from "../../../assets";

const newsStack = StackNavigator(
  {
    News: { screen: NewsScreen },
    Details: { screen: Details }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default TabNavigator(
  {
    News: { screen: newsStack },
    Books: { screen: BooksScreen }
  },
  {
    tabBarLabel: { tintColor: color.primary },
    tabBarOptions: {
      style: { backgroundColor: color.primary },
      labelStyle: { color: color.white, fontSize: 16, fontWeight: "bold" }
    }
  },
  { animationEnabled: false, swipeEnabled: true }
);
