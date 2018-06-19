const rewireEslint = require('react-app-rewire-eslint');
const rewireStylelint = require('react-app-rewire-stylelint');

module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  config = rewireStylelint.withLoaderOptions({
    files: ['src/**/*.scss']
  })(config, env);

  return config;
}
