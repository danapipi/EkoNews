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
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = (item, index) => {
    const { title, publisher, book_image, primary_isbn13 } = item;
    return (
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
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            marginLeft: 10,
            marginTop: 10
          }}
        >
          {publisher}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            marginLeft: 10,
            marginTop: 5
          }}
        >
          ISBN : {primary_isbn13}
        </Text>
        <Image
          source={{ uri: book_image }}
          style={{
            width: "100%",
            height: "50%",
            marginTop: 40,
            borderBottomRightRadius: 15
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  render() {
    const {
      dashboard: { listBooks, loading }
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
          {loading ? (
            <ActivityIndicator size="large" color={color.quarternary} />
          ) : (
            <FlatList
              data={listBooks}
              extraData={listBooks}
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

const BooksScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
export default BooksScreen;
