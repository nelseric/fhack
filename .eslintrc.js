module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
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
