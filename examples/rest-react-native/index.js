/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Start the mocking conditionally
if (__DEV__) {
  const {server} = require('./src/api/mocks/server.ts');
  server.listen();
}

AppRegistry.registerComponent(appName, () => App);
