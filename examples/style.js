'use strict';

import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

/*
  Although inline Styles are supported, StyleSheets objects are preferred for clarity and
  performance. They can live in their own modules, be evaluated, and they can be passed
  around as props. More than one style can be assigned to one Component by using an array
  of StyleSheet object properties
*/
const styles = StyleSheet.create({
  // StyleSheet properties are proper CSS rules in a camelCase syntax
  container: {
    top: 20,
    // Let's see how to apply padding
    padding: 0, // 20
  },

});

const debug = StyleSheet.create({
  redBorder: {
    // Or a border
    borderWidth: 0, // 1
    borderColor: 'red',
  },

});

const Component = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={debug.redBorder}>
            Awesome
          </Text>
        </View>
        <View>
          <Text>
            Project
          </Text>
        </View>

      </View>
    );
  },

});

module.exports = Component;
