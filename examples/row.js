'use strict';

import React, {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    top: 20,
    padding: 20,
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  flexItem: {
    flex: 1,
  },

  flexImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF5C00',
  },

  flexItem2: {
    flex: 2,
  },

  flexContent: {
    textAlign: 'center',
  },

});

const Row = React.createClass({
  render() {
    return (
      <TouchableOpacity
        style={styles.flexContainer}
        onPress={() => {
          // Uncomment to test the Dev Tools
          // debugger;
          console.log(this.props);
        }}
      >
        <View style={styles.flexItem}>
          <Image
            style={styles.flexImage}
            source={{ uri: this.props.liquid_image }}
          />
        </View>

        <View style={styles.flexItem2}>
          <Text style={styles.content}>
            {this.props.titlepost_value}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

});

module.exports = Row;
