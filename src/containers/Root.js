if (PRODUCTION) {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
