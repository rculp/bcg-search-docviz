const rewired = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');
const rewireStylelint = require('react-app-rewire-stylelint');

function rewireSass(config, env) {
    const cssLoader = rewired.getLoader(
      config.module.rules,
      rule => rule.test && String(rule.test) === String(/\.css$/)
    );
  
    const sassLoader = {
      test: /\.scss$/,
      use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
    };
  
    const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
    oneOf.unshift(sassLoader);
  
    return config;
}

function rewireReactHotLoader(config, env) {
  if (env === 'production') {
    return config;
  }

  return rewired.injectBabelPlugin(['react-hot-loader/babel'], config);
}

module.exports = function override(config, env) {
  config = rewireEslint(config, env);
  config = rewireStylelint.withLoaderOptions({
    files: ['src/**/*.scss']
  })(config, env);
  config = rewireSass(config, env);
  config = rewireReactHotLoader(config, env);
  
  return config;
};
