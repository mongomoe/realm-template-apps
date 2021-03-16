import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Button} from 'react-native';

export function WelcomeView({navigation, route}) {
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

const styles = StyleSheet.create({
  //   sectionContainer: {
  //     marginTop: 32,
  //     paddingHorizontal: 24,
  //   },
  //   footerText: {
  //     fontSize: 16,
  //     textAlign: 'center',
  //   },
  //   footer: {
  //     margin: 40,
  //   },
});
