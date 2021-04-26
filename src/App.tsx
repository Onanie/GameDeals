import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import GamesListScreen from '../src/Screens/List/GamesListScreen';
import DealsListScreen from '../src/Screens/List/DealsListScreen';
import StoresListScreen from '../src/Screens/List/StoresListScreen';
import ResultDetails from '../src/Components/ResultDetails';
import DealInfo from './Components/DealInfo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          margin: 10,
        },
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name="Deals" component={DealsListScreen} />
      <Tab.Screen name="Games" component={GamesListScreen} />
      <Tab.Screen name="Stores" component={StoresListScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return <AppNavigation />;
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Deals"
          component={HomeTabs}
          //@ts-ignore
          options={({route}) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Deals';
            switch (routeName) {
              case 'Stores': {
                return {
                  headerTitle: 'Stores',
                };
              }
              case 'Games': {
                return {
                  headerTitle: 'Games',
                };
              }

              case 'Deals':
              default: {
                return {
                  headerTitle: 'Deals',
                  headerLeft: null,
                  headerTintColor: '',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                };
              }
            }
          }}
        />

        <Stack.Screen
          name="ResultDetails"
          component={ResultDetails}
          options={{
            title: 'Deal Details',
          }}
        />

        <Stack.Screen
          name="DealInfo"
          component={DealInfo}
          options={{
            title: 'Deal Information',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
