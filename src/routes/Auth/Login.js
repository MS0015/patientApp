import { Text, Center, Button, Stack, Input, Icon, HStack, VStack } from 'native-base';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';

function Login() {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);
  return (
    <Center justifyContent="center" flex={1}>
      <Text variant="mainTitle">Welcome back!</Text>
      <Text variant="desc">Sign in to continue!</Text>

      <HStack mb="2.5" mt="1.5" space={3}>
        <Button
          width="36%"
          leftIcon={<Icon as={<AntDesign name="google" />} size={5} ml="2" />}
          colorScheme="red"
        >
          Google
        </Button>
        <Button
          width="36%"
          leftIcon={<Icon as={<AntDesign name="facebook-square" />} size={5} ml="2" />}
          colorScheme="blue"
        >
          Facebook
        </Button>
      </HStack>

      <Text variant="desc" mb={2}>
        OR
      </Text>
      <Stack space={4} w="100%" alignItems="center" mb={3}>
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
          }
          placeholder="E-mail"
        />
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          InputLeftElement={
            <Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />
          }
          InputRightElement={
            <Icon
              as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => setShow(!show)}
            />
          }
          placeholder="Password"
        />
      </Stack>

      <GButton label="Login" w="75%" />

      <VStack alignItems="center" mt={3}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text variant="desc" color="blue.700">
            Forgot password
          </Text>
        </TouchableOpacity>
        <Text variant="desc" color="blue.700">
          Don't have account? Join with us.
        </Text>
      </VStack>
    </Center>
  );
}

export default Login;
