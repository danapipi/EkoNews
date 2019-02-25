import React, { Component } from "react";
import { View, Text, TextInput, Picker } from "react-native";
import TabNavigator from "./tab";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { color } from "../../assets";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsActions, booksActions } from "../../redux/modules/dashboard";

const mapDispatchToProps = dispatch => ({
  dashboardNewsAction: bindActionCreators(newsActions, dispatch),
  dashboardBooksAction: bindActionCreators(booksActions, dispatch)
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      category: "news"
    };
  }

  _renderTab = () => {
    return (
      <View style={{ height: "100%" }}>
        <TabNavigator />
      </View>
    );
  };

  _search = val => {
    const { category } = this.state;
    const { dashboardNewsAction, dashboardBooksAction } = this.props;
    if (category === "news") {
      dashboardNewsAction.request(val);
    } else {
      dashboardBooksAction.request(
        val
          .toString()
          .trim()
          .toLowerCase()
          .replace(/ /g, "-")
      );
    }
  };

  render() {
    const { category } = this.state;
    return (
      <View>
        <View style={{ backgroundColor: color.primary }}>
          <View
            style={{
              flexDirection: "row",
              width: "85%",
              backgroundColor: color.white,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              name="magnify"
              size={24}
              color={color.black}
              style={{ flex: 0.5, marginHorizontal: 10, borderRightWidth: 0.5 }}
            />
            <Picker
              selectedValue={category}
              style={{ height: 50, width: 110 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ category: itemValue })
              }
            >
              <Picker.Item label="News" value="news" />
              <Picker.Item label="Books" value="books" />
            </Picker>
            <TextInput
              style={{ flex: 3 }}
              onChangeText={val =>
                this._search(
                  val
                    .toString()
                    .trim()
                    .toLowerCase()
                )
              }
            />
          </View>
        </View>
        {this._renderTab()}
      </View>
    );
  }
}

const DashboardContainer = connect(
  null,
  mapDispatchToProps
)(Dashboard);
export default DashboardContainer;
