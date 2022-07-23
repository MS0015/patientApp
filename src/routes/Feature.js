import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'native-base';
import UserMainHeader from '../comp/UserMainHeader';

export default function Feature() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bg={'gray.300'}>
        <UserMainHeader />
        <Text>JJJ</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
