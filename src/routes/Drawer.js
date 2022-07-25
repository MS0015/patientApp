import { Text, VStack } from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Drawer() {
  return (
    <LinearGradient
      style={{ flex: 1, padding: 13 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 2 }}
      colors={['#336ADF', '#374E80']}
    >
      <VStack flex={1}>
        <Text>Mathusuthan</Text>
      </VStack>
    </LinearGradient>
  );
}
