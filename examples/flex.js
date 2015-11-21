'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

/*
  Instead of Box Model you might be used to, React Native sits upon the more modern Flexbox Model
*/
var Component = React.createClass({
  render: function() {
    return (
      <View style={styles.flexContainer}>

        <View style={[styles.flexItem]}>
          <Text>
            Awesome
          </Text>
        </View>
        <View style={[styles.flexItem2]}>
          <Text style={styles.flexContent}>
            Project
          </Text>
        </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  flexContainer: {
    top: 20,
    padding: 20,
    flex: 1,

    // Default Flexbox direction (in React Native) is 'column', this CSS rules gives item their alignment direction
    flexDirection: 'column', // row
    alignItems: 'center',
  },

  // By default Flexbox items will grow as much as possible filling the remaning space into their Flexbox container
  flexItem: {
    flex: 1
  },

  /*
    When they share space with other Flexbox items, the flex rule gives them a proportioned size
    Think it as a simplified Grid System (i.e. Bootstrap)
    */
  flexItem2: {
    flex: 2 // 3
  },

  flexContent: {
    textAlign: 'center',
  },

});

var debug = StyleSheet.create({
  redBorder: {
    borderWidth: 1,
    borderColor: 'red'
  },

});


module.exports = Component;
