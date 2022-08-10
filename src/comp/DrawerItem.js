import { HStack, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DrawerItem({ label }) {
  return (
    <TouchableOpacity>
      <HStack justifyContent="space-between">
        <HStack marginBottom={6} alignItems="center" space={3}>
          <AntDesign name="heart" size={30} color="white" />

          <Text variant="title" color="white">
            {label}
          </Text>
        </HStack>
        <AntDesign name="right" size={20} color="white" />
      </HStack>
    </TouchableOpacity>
  );
}
