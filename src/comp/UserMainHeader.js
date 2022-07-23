import React from 'react';
import { Avatar, HStack, VStack, View, Text, Input, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';

export default function UserMainHeader() {
  return (
    <View mb={10}>
      <View bg="blue.600" borderBottomRadius={25}>
        <View m={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space={3}>
              <Avatar size="lg" />
              <VStack>
                <Text variant="title">Hi Mathusuthan</Text>
                <Text variant="mainTitle">Find Your Doctor</Text>
              </VStack>
            </HStack>
            <Text>==</Text>
          </HStack>
        </View>
      </View>
      <View alignItems="center" position="absolute" w="100%" top={91} p={1}>
        <Input
          InputLeftElement={
            <Icon as={<FontAwesome name="search" />} size={7} ml="2" color="muted.400" />
          }
          placeholder={'Search.....'}
          w="90%"
          variant="filled"
          bgColor={'white'}
        />
      </View>
    </View>
  );
}
