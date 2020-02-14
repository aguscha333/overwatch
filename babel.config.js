module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actions: './src/actions',
          api: './src/core/api',
          services: './src/services',
          components: './src/components',
          constants: './src/core/constants',
          screens: './src/screens',
          hooks: './src/core/hooks',
          locale: './src/core/locale',
          reducers: './src/reducers',
          selectors: './src/selectors',
          store: './src/core/store',
          styles: './src/styles',
          utils: './src/core/utils',
          navigators: './src/core/navigators',
          validations: './src/validations',
        },
      },
    ],
  ],
};
