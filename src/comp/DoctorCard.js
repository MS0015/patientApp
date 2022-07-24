import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

export default function DoctorCard() {
  return (
    <VStack mx={4} p={4} bg="white" borderRadius={10} shadow={2}>
      <HStack space={3}>
        <VStack>
          <ImageBackground
            style={{ width: 100, height: 100, alignItems: 'flex-end', justifyContent: 'flex-end' }}
            imageStyle={{ borderRadius: 10 }}
            source={require('../asset/img/dr.jpg')}
            resizeMode="cover"
          >
            <HStack alignItems="center" space={1} bg="gray.100">
              <MaterialIcons name="star" color="orange" size={15} />
              <Text variant="mainTitle" fontSize="sm">
                3.7
              </Text>
            </HStack>
          </ImageBackground>
        </VStack>
        <VStack flex={1}>
          <HStack justifyContent="space-between">
            <Text variant="mainTitle">Dr. Saravanan</Text>
            <AntDesign name="heart" color="red" size={25} />
          </HStack>
          <Text variant="desc" color="blue.600" fontSize="sm">
            Specilist medicine
          </Text>
          <Text variant="desc" fontSize="md" color="gray.600">
            6 Years experience
          </Text>
          <Text variant="desc" fontSize="md" color="gray.600">
            <Octicons name="dot-fill" color="blue" size={20} /> 69 Patient
          </Text>
        </VStack>
      </HStack>

      <HStack justifyContent="space-between" pt={2}>
        <VStack>
          <Text variant="title" color="blue.600" fontSize="md">
            Next Available
          </Text>
          <Text variant="desc" fontSize="md" color="gray.600">
            10:00 AM tomorrow
          </Text>
        </VStack>
        <LinearGradient
          style={{ borderRadius: 5, width: '40%', padding: 5, marginTop: 15 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#0452E5', '#01B7EB']}
        >
          <TouchableOpacity style={{ width: '100%', alignItems: 'center' }}>
            <Text variant="mainTitle" color="white" fontSize="sm">
              Add Appoinment
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </HStack>
    </VStack>
  );
}
