'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View
} = React;

var CodemotionAwesomeProject = React.createClass({
  render: function() {
    return (
      <Empty />
    );
  }
});

// We'll walk through all the examples by switching the rendered Component
var Empty = require('./examples/empty');
var Style = require('./examples/style');
var Flex = require('./examples/flex');
var Assets = require('./examples/assets');
var Network = require('./examples/network');
var Module = require('./examples/module');

// Entry point for React Native
AppRegistry.registerComponent('CodemotionAwesomeProject', () => CodemotionAwesomeProject);
