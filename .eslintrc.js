module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'env': {
    'mocha': true,
  },
  'globals': {
    'PRODUCTION': false,
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false,
    }],
  },
};
