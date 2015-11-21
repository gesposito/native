'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

/*
  Images are a key asset in both Web and Mobile Apps, let's see how they fit into React Native
*/
var Component = React.createClass({
  render: function() {
    return (
      <View style={styles.flexContainer}>

        <View style={styles.flexItem}>

          // They can both be declared with an URI for remote loading
          <Image
            style={styles.flexImage}
            source={{uri: 'http://i.imgur.com/YWRpWml.png'}}
          />

          /*
            Or with a local path, since v0.14 they can sit among your Code, and they are loaded as soon as you hit Refresh
            Try to change cm.png to cm2.png, then take a second to compare it with Native development where you might need to recompile
          */
          <Image
            style={styles.flexImage}
            source={require('../img/cm.png')}
          />

        </View>
        <View style={styles.flexItem2}>
          <Text style={styles.content}>
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

    flexDirection: 'row',
    alignItems: 'center',
  },

  flexItem: {
    flex: 1
  },

  flexItem2: {
    flex: 2
  },

  // Image dimensions are needed in order to render the Image Component
  flexImage: {
    width: 40,
    height: 40
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
