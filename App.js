import React from 'react';
import { NativeBaseProvider } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/asset/theme';
import MainScene from './src/routes/MainScene';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider
        theme={theme}
        config={{
          suppressColorAccessibilityWarning: true,
          dependencies: {
            'linear-gradient': LinearGradient,
          },
        }}
      >
        <MainScene />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
