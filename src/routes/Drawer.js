import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawerItem from '../comp/DrawerItem';

export default function Drawer({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, padding: 20 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 2 }}
        colors={['#336ADF', '#374E80']}
      >
        <HStack space={2}>
          <Avatar
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg',
            }}
          >
            SS
          </Avatar>

          <VStack flex={1}>
            <Text variant="title" color="white">
              Mathusuthan
            </Text>
            <Text variant="desc" color="white">
              077567814
            </Text>
          </VStack>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <VStack bg="red.600" borderRadius={50} alignSelf="center" p={1}>
              <AntDesign name="close" size={20} color="white" />
            </VStack>
          </TouchableOpacity>
        </HStack>
        <VStack justifyContent={'space-between'} flex={1}>
          <VStack mt={5}>
            <DrawerItem label="Pharmacies" />
            <DrawerItem label="My Orders" />
            <DrawerItem label="Payments" />
            <DrawerItem label="Favourites" />
            <DrawerItem label="Privacy control" />
            <DrawerItem label="Security control" />
            <DrawerItem label="Notification Settings" />
            <DrawerItem label="Help Center" />
          </VStack>

          <TouchableOpacity>
            <HStack marginBottom={6} alignItems="center" space={3}>
              <AntDesign name="lock" size={30} color="white" />

              <Text variant="title" color="white">
                Logout
              </Text>
            </HStack>
          </TouchableOpacity>
        </VStack>
      </LinearGradient>
    </SafeAreaView>
  );
}
