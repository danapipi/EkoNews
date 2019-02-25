import React, { Component } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { color } from "../../../assets";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dashboardSelect, newsActions } from "../../../redux/modules/dashboard";

const mapStateToProps = state => ({
  dashboard: dashboardSelect(state)
});
const mapDispatchToProps = dispatch => ({
  dashboardNewsAction: bindActionCreators(newsActions, dispatch)
});

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = (item, index) => {
    const {
      web_url,
      source,
      snippet,
      multimedia,
      headline: { main }
    } = item;
    const img = multimedia.map(index => index.url);
    const uriImg = `https://www.nytimes.com/${img[index]}`;
    console.warn("img", img[1], img[0], index);
    return (
      <View
        style={{
          marginLeft: 0,
          marginTop: 10,
          flex: 1,
          height: 180,
          width: "98%",
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: color.white,
          marginBottom: 15
        }}
      >
        {img !== "undefined" && (
          <View style={{}}>
            <ImageBackground
              source={{ uri: uriImg }}
              style={{
                width: "100%",
                height: "100%"
              }}
              imageStyle={{
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  textAlign: "left",
                  marginRight: 5
                }}
              >
                {main}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>{source}</Text>
            </ImageBackground>
          </View>
        )}
      </View>
    );
  };

  render() {
    const {
      dashboard: { newsData, loading }
    } = this.props;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: color.grey
        }}
      >
        <FlatList
          refreshing={loading}
          data={newsData}
          extraData={newsData}
          keyExtractor={(item, key) => item + key}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 15, marginLeft: 0 }}
        />
      </View>
    );
  }
}

const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
export default NewsScreen;
