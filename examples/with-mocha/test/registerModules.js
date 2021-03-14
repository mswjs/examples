const path = require('path')

require('@babel/register')({
  configFile: path.normalize(`${__dirname}/../babel.config.js`),
  ignore: ['/node_modules'],
})

// Required per https://testing-library.com/docs/react-testing-library/setup#using-without-jest
require('jsdom-global/register')

// Support fetch in a node env. Requires the localstorage polyfill
require('isomorphic-fetch')
require('localstorage-polyfill')
