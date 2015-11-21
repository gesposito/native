'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} = React;

var Row = React.createClass({

  render: function() {
    return (
      <TouchableOpacity style={styles.flexContainer} onPress={()=>{
          //debugger;
          console.log(this.props);
        }}>
        <View style={styles.flexItem}>

          <Image
            style={styles.flexImage}
            source={{uri: this.props.liquid_image}}
          />

        </View>
        <View style={styles.flexItem2}>
          <Text style={styles.content}>
            {this.props.titlepost_value}
          </Text>
        </View>
      </TouchableOpacity>
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

  flexImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF5C00'
  },

  flexItem2: {
    flex: 2
  },

  flexContent: {
    textAlign: 'center',
  },

});

module.exports = Row;
