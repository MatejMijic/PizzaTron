module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '~/assets': './app/assets',
          '~/modules': './app/modules',
          '~/navigators': './app/navigators',
        },
      },
    ],
  ],
};
