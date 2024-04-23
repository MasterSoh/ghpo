/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  console.log('Home Screen');
  useEffect(() => {
    console.log('Home Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen() {
  console.log('Profile Screen');
  useEffect(() => {
    console.log('Profile Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeStack() {
  console.log('Home Stack');
  useEffect(() => {
    console.log('Home Stack (Once)');
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Product" component={ProductScreen} />
      <TopTab.Screen name="Listing" component={ListingScreen} />
    </TopTab.Navigator>
  );
}

function AccountScreen() {
  const navigation = useNavigation();

  console.log('Account Screen');
  useEffect(() => {
    console.log('Account Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('HomeStack', {
            screen: 'Profile',
          })
        }
      />
    </View>
  );
}

function ProductScreen() {
  const navigation = useNavigation();

  console.log('Product Screen');
  useEffect(() => {
    console.log('Product Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Product Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ListingScreen() {
  const navigation = useNavigation();

  console.log('Listing Screen');
  useEffect(() => {
    console.log('Listing Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Listing Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function SearchScreen() {
  const navigation = useNavigation();

  console.log('Search Screen');
  useEffect(() => {
    console.log('Search Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function SettingScreen() {
  const navigation = useNavigation();

  console.log('Setting Screen');
  useEffect(() => {
    console.log('Setting Screen (Once)');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function RootTab() {
  console.log('Root');
  useEffect(() => {
    console.log('Root (Once)');
  }, []);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="ProductStack" component={ProductStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Root"
          options={{title: 'GHPO APP'}}
          component={RootTab}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
