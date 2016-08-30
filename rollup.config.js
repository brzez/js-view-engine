import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

export default {
  entry: 'src/index.js',
  plugins: [
    babel(babelrc()),
    // istanbul({
    //   exclude: ['test/**/*', 'node_modules/**/*']
    // })
  ],
  dest: 'bundle.js'
};
