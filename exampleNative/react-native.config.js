const path = require('path');

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: [
    path.join(
      __dirname,
      'node_modules',
      '@swm-labs/swm-icon-pack-react',
      'fonts',
    ),
  ],
};
