import React, { Component } from "react";
import { WebView } from "react-native";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { web } = this.props.navigation.state.params;
    return <WebView source={{ uri: web }} />;
  }
}
