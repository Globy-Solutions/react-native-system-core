module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-private-methods', {loose: true}],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@/': './src/',
          '@assets': './src/assets',
          '@atoms': './src/components/atoms',
          '@core': './src/core',
          '@layouts': './src/layouts',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@props': './src/types',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
