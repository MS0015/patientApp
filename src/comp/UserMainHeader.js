import React from 'react';
import { Avatar, HStack, VStack, View, Text, Input, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

export default function UserMainHeader() {
  const navigation = useNavigation();

  return (
    <View mb={10}>
      <View bg="blue.600" borderBottomRadius={25}>
        <View m={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space={3}>
              <Avatar size="lg" source={require('../asset/img/dr.jpg')} />
              <VStack>
                <Text variant="title">Hi Mathusuthan</Text>
                <Text variant="mainTitle">Find Your Doctor</Text>
              </VStack>
            </HStack>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
              <FontAwesome name="align-right" size={30} color="white" />
            </TouchableOpacity>
          </HStack>
        </View>
      </View>
      <View alignItems="center" position="absolute" w="100%" top={91} p={1}>
        <Input
          fontFamily="NeoSansTR"
          fontSize="md"
          InputLeftElement={
            <Icon as={<Feather name="search" />} size={5} ml="2" color="muted.400" />
          }
          InputRightElement={<Icon as={<Feather name="x" />} size={4} mr="2" color="muted.400" />}
          placeholder="Search....."
          w="90%"
          variant="filled"
          bgColor="white"
        />
      </View>
    </View>
  );
}
