'use strict';

require('babel-core/register')({});
require('babel-polyfill');

var server = require('./server/server').default;

const PORT = process.env.PORT || 3000;

server.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> ??  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT)
  }
})