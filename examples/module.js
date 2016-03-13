'use strict';

import React, {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

const Row = require('./row');

const API = 'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/speakers.json';

const styles = StyleSheet.create({
  ago: {
    top: 20,
    padding: 20,
  },

});

/*
  After installing any JavaScript or Native Module with npm, you can require and access them
  into your code. Modules that don't include Native code will be immediately availabled upon refresh
  thanks to the packager.

  Here we're demo-ing moment:
  `npm install -S moment`
*/
const moment = require('moment');

const Component = React.createClass({
  getInitialState() {
    return {
      list: [],
    };
  },

  componentDidMount() {
    fetch(API).then(
      (response) => response.json()
    ).then((data) => {
      this.setState({
        list: data,
      });
    });
  },

  render() {
    /*
      `moment` API stays just the same, any Module that doesn't depend upon Node or Browsers APIs
      is compatible with React Native.
      One exception is luckly `XHR` that has been polyfilled.
    */
    return (
      <ScrollView>

        <View style={styles.ago}>
          <Text>
            {'Last refresh: '}
            {moment().format('HH:mm')}
          </Text>
        </View>

        {(this.state.list).map(
          (speaker, index) => <Row key={index} {...speaker} />
        )}

      </ScrollView>
    );
  },
  
});

const debug = StyleSheet.create({
  redBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },

});

module.exports = Component;
