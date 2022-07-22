import { Text, Image, Center, Button } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';

function OnBoard() {
  const navigation = useNavigation();

  return (
    <Center justifyContent="center" flex={1} bg="white">
      <Image
        source={require('../../asset/img/logo.png')}
        alt="Marketplace img"
        size="3xs"
        resizeMode="contain"
        mb={5}
      />
      <GButton label="Login" onPress={() => navigation.navigate('Login')} />

      <Button variant="outline" width="80%" m={1}>
        <Text variant="mainTitle" color="#0452E5">
          Signup
        </Text>
      </Button>
    </Center>
  );
}

export default OnBoard;
