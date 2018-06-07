const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.

  // For example, add typescript loader:
  config["watchOptions"]={
                          aggregateTimeout: 300,
                          poll: 1000,
                          ignored: /node_modules/,
                        };

  return config;
};
