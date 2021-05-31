import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './src/screens/Loader/LoadingScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import ResultScreen from './src/screens/ResultScreen/ResultScreen';
import InfoScreen from './src/screens/InfoScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" >
        {/* <Stack.Screen
          component={LoadingScreen}
          name="LoadingScreen"
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          component={SearchScreen}
          name="SearchScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ResultScreen}
          name="ResultScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={InfoScreen}
          name="InfoScreen"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
