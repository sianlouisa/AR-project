import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './js/Components/Login';
import Signup from './js/Components/Signup';
import StartScreen from './js/Components/StartScreen';
import PlayAgain from './js/Components/PlayAgain';
import InitialiseAR from './js/Components/InitialiseAR';

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}

const SwitchNav = createSwitchNavigator(
  {
    PlayAgain,
    StartScreen,
    Signup,
    Login,
    InitialiseAR,
  },
  {
    initialRouteName: 'Login',
  }
);

const SwitchNavContainer = createAppContainer(SwitchNav);
