'use strict';

import React, {
  StyleSheet,
  ScrollView,
} from 'react-native';

const Row = require('./row');

const API_URL = 'https://raw.githubusercontent.com/gesposito/codemotion_milan_2015_data/master/speakers.json';

/*
 Although React Native provides a polyfill for XHR, the recommended way of doing Network calls
 is with the much more modern `fetch` API
*/
const Component = React.createClass({
  getInitialState() {
    return {
      list: [],
    };
  },

  componentDidMount() {
    // fetch can be provided with the API endpoint, by default the method will be GET
    fetch(API_URL).then(
      /* Instead of your usual response it will return a Promise based Stream object,
        its content is then readed asynchronously */
      (response) => response.json()
    ).then((data) => {
      // An utility method will return the JSON response from the Stream object

      // Uncomment to test the Dev Tools
      // debugger;
      this.setState({
        list: data,
      });
    });
  },

  render() {
    // Here we moved our entire View into its own Component that will receive data from its props
    return (
      <ScrollView>
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
