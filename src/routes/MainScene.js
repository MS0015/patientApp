import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, Text, View } from 'native-base';
import Login from './Auth/Login';
import OnBoard from './Auth/OnBoard';
import ForgotPassword from './Auth/ForgotPassword';
import OTPVerification from './Auth/OTPVerification';
import ResetPassword from './Auth/ResetPassword';
import Signup from './Auth/Signup';
import Feature from './Feature';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BlankView() {
  return <View />;
}

function Home() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={Feature}
        options={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/heart.png')}
              alt="Icon"
              size={size + 10}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        })}
      />
      <Tab.Screen
        name="Orders"
        component={BlankView}
        options={({ route }) => ({
          headerTitle: () => <Text>{route.name}</Text>,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/cal.png')}
              alt="Icon"
              size={size + 10}
              tintColor={color}
              resizeMode="contain"
            />
          ),
          tabBarBadge: 2,
        })}
      />
      <Tab.Screen
        name="Earnings"
        component={BlankView}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/ddd.png')}
              alt="Icon"
              size={size + 10}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={BlankView}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/noti.png')}
              alt="Icon"
              size={size + 10}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={BlankView}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../asset/img/user.png')}
              alt="Icon"
              size={size + 10}
              tintColor={color}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default class MainScene extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          {/* Auth */}
          <Stack.Screen
            name="OnBoard"
            component={OnBoard}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />
          <Stack.Screen
            name="OTPVerification"
            component={OTPVerification}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false, headerStyle: { elevation: 0 } }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
