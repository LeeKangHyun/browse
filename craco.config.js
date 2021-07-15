const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
