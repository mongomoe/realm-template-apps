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
import {TasksView} from './views/TasksView';

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeView} />
          <Stack.Screen name="Tasks" component={TasksView} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built with the MongoDB Realm Sync Template
        </Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center', // <-- the magic
  },
  footer: {
    margin: 40,
  },
});

export default App;
