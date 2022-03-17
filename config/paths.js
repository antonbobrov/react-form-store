const path = require('path');

exports.PATHS = {
  src: {
    path: path.join(__dirname, '..', 'src'),
    ts: path.join(__dirname, '..', 'src/ts'),
  },
  pages: {
    pages: path.join(__dirname, '..', 'examples-src', 'pages'),
    ts: path.join(__dirname, '..', 'examples-src', 'ts'),
    static: path.join(__dirname, '..', 'examples-src', 'static'),
    build: path.join(__dirname, '..', 'examples-build'),
  },
};
