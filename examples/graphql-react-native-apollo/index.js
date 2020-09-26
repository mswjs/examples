import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  require('react-native-url-polyfill/auto')
  const { native } = require('./mocks/native')
  native.listen()
}

AppRegistry.registerComponent(appName, () => App)
