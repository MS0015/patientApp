import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'native-base';
import Login from './Auth/Login';
import OnBoard from './Auth/OnBoard';
import ForgotPassword from './Auth/ForgotPassword';
import OTPVerification from './Auth/OTPVerification';
import ResetPassword from './Auth/ResetPassword';
import Signup from './Auth/Signup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BlankView() {
  return <View />;
}

function Home() {
  return (
    <Tab.Navigator initialRouteName="More">
      <Tab.Screen
        name="Feed"
        component={BlankView}
        options={({ route }) => ({
          headerTitle: () => <Text />,
          // headerLeft: () => <HeaderLeft />,
          tabBarLabel: () => (
            <Text variant="title" fontSize="sm">
              Feed
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Feather name="grid" color={color} size={size} />,
        })}
      />
      <Tab.Screen
        name="Orders"
        component={BlankView}
        options={({ route }) => ({
          headerTitle: () => <Text>{route.name}</Text>,
          // headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderRight />,
          tabBarLabel: () => (
            <Text variant="title" fontSize="sm">
              Orders
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Feather name="grid" color={color} size={size} />,
          tabBarBadge: 2,
        })}
      />
      <Tab.Screen
        name="Earnings"
        component={BlankView}
        options={{
          headerTitle: () => <Text />,
          // headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderRight />,
          tabBarLabel: () => (
            <Text variant="title" fontSize="sm">
              Earnings
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <FontAwesome name="bank" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={BlankView}
        options={{
          // headerTitle: () => <Text></Text>,
          // headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderRight />,
          headerShown: false,
          tabBarLabel: () => (
            <Text variant="title" fontSize="sm">
              Wallet
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <FontAwesome name="money" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={BlankView}
        options={{
          headerTitle: () => <Text />,
          // headerLeft: () => <HeaderLeft />,
          tabBarLabel: () => (
            <Text variant="title" fontSize="sm">
              More
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Feather name="grid" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default class MainScene extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
