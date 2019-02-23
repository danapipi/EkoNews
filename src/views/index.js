import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'

import AppNavigator from '../navigation'

export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
)

const addListener = createReduxBoundAddListener('root')

class RootView extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, navigation } = this.props
    if (navigation.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const { navigation, dispatch } = this.props
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation,
          addListener,
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(RootView)
