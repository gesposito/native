'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} = React;

var Row = require('./row');

/*
 Although React Native provides a polyfill for XHR, the recommended way of doing Network calls is with the modern fetch API
*/
var Component = React.createClass({
  getInitialState: function() {
    return {
        list: []
    }
  },

  componentDidMount: function() {
    // fetch can be provided with the API endpoint, by default the method will be GET
    fetch(API_URL).then(
      // Instead of your usual response it will return a Promise based Stream object, its content is then readed asynchronously
      (response) => response.json()
    ).then((data) => {
      // An utility method will return the JSON response from the Stream object

      // Uncomment to test the Dev Tools
      // debugger;
      this.setState({
        list: data
      })
    });
  },

  render: function() {
    return (
      <ScrollView>

        // Here we moved our entire View into its own Component that will receive data from its props
        {(this.state.list).map((speaker, index) => {
          return <Row key={index} {...speaker} />
        })}

      </ScrollView>
    );
  }
});

var API_URL = "https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/speakers.json";

var debug = StyleSheet.create({
  redBorder: {
    borderWidth: 1,
    borderColor: 'red'
  },

});


module.exports = Component;
