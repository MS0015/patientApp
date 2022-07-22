import React from 'react';
import {NativeBaseProvider} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from './src/asset/theme';
import MainScene from './src/routes/MainScene';

export default function App() {
  return (
    <NativeBaseProvider
      theme={theme}
      config={{
        suppressColorAccessibilityWarning: true,
        dependencies: {
          'linear-gradient': LinearGradient,
        },
      }}>
      <MainScene />
    </NativeBaseProvider>
  );
}
