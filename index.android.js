'use strict';
import React, {
  AppRegistry,
} from 'react-native';

const CodemotionAwesomeProject = React.createClass({
  render() {
    return (
      <Empty />
    );
  },

});

// We'll walk through all the examples by switching the rendered Component
import Empty    from './examples/empty';
import Style    from './examples/style';
import Flex     from './examples/flex';
import Assets   from './examples/assets';
import Network  from './examples/network';
// This needs `npm install -S moment` (left out for showing live-reload)
// import Module   from './examples/module';

// Entry point for React Native
AppRegistry.registerComponent('CodemotionAwesomeProject', () => CodemotionAwesomeProject);
