import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { color } from "../../../assets";
import { connect } from "react-redux";
import moment from "moment";
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
      headline: { main },
      pub_date
    } = item;
    const img = multimedia.map(index => index.url);
    const uriImg = `https://www.nytimes.com/${img[index]}`;
    const date = moment(pub_date).format("DD MMM YYYY");
    return (
      <TouchableOpacity
        onPress={() => {
          const { navigation } = this.props;
          navigation.navigate("Details", { web: web_url });
        }}
        style={{}}
      >
        <View
          style={{
            marginLeft: 0,
            marginTop: 10,
            flex: 1,
            height: 250,
            width: "98%",
            backgroundColor: color.white,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              textAlign: "left",
              marginRight: 5,
              marginLeft: 10,
              marginTop: 10
            }}
          >
            {main}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              marginLeft: 10,
              marginTop: 10
            }}
          >
            {source}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              marginLeft: 10,
              marginTop: 5
            }}
          >
            {date}
          </Text>
          <Image
            source={{ uri: uriImg }}
            style={{
              width: "100%",
              height: "50%",
              marginTop: 20,
              borderBottomRightRadius: 15
            }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      dashboard: { newsData, loading, sortNewsData },
      dashboardNewsAction
    } = this.props;
    return (
      <ScrollView
        style={{ marginBottom: 150, flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: color.grey
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: color.secondary,
              width: "90%",
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              marginTop: 10,
              flex: 1,
              height: 40,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: color.white,
                fontSize: 14,
                fontWeight: "bold",
                flex: 1,
                marginHorizontal: 10
              }}
            >
              Sort by date :
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                flex: 1,
                borderRightWidth: 0.3,
                borderRightColor: color.white
              }}
              onPress={() => dashboardNewsAction.sortA()}
            >
              <Text
                style={{
                  color: color.white,
                  fontSize: 14,
                  fontWeight: "300",
                  alignSelf: "center",
                  textAlign: "center"
                }}
              >
                A - Z
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1
              }}
              onPress={() => dashboardNewsAction.sortB()}
            >
              <Text
                style={{
                  color: color.white,
                  fontSize: 14,
                  fontWeight: "300"
                }}
              >
                Z - A
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color={color.quarternary} />
          ) : (
            <FlatList
              data={newsData}
              extraData={newsData || sortNewsData}
              keyExtractor={(item, key) => item + key}
              renderItem={({ item, index }) => this.renderItem(item, index)}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 15, marginLeft: 0 }}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
export default NewsScreen;
