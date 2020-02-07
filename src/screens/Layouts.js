import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import styles from './style';
import {View, Text} from 'react-native';

class Layouts extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet',
    };
  }

  componentDidAppear() {
    this.setState({text: 'componentDidAppear'});
  }

  componentDidDisappear() {
    console.log('componentDidDisappear');
  }

  navigationButtonPressed({buttonId}) {
    // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1}>{'Lifecycle Screen'}</Text>
        <Text style={styles.h1}>{this.state.text}</Text>
      </View>
    );
  }
}

export default Layouts;
