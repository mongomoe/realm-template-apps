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
import {WelcomeView} from './views/WelcomeView';
import {TasksView} from './views/TasksView';
import {AuthProvider} from './realms/auth/AuthProvider';
import {Logout} from './components/Logout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeView} />
            <Stack.Screen
              name="Tasks"
              component={TasksView}
              options={{
                headerLeft: function Header() {
                  return <Logout />;
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Built with the MongoDB Realm Sync Template
          </Text>
        </View>
      </SafeAreaProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 10,
    textAlign: 'center',
  },
  footer: {
    margin: 40,
  },
});

export default App;
