/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Button} from 'react-native';
import Realm from 'realm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function WelcomeView({navigation}) {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Welcome Screen</Text>
        <Button
          title="Go to Tasks Screen"
          onPress={() => navigation.navigate('Tasks')}
        />
      </View>
    </SafeAreaProvider>
  );
}
function TaskView({navigation}) {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Tasks Screen</Text>
        <Button
          title="Go to Welcome Screen"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </SafeAreaProvider>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeView} />
        <Stack.Screen name="Tasks" component={TaskView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
