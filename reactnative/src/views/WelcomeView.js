import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export function WelcomeView({navigation, route}) {
  const [passwordHidden, setPasswordHidden] = useState(true); // true by default

  return (
    <SafeAreaProvider>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>My Sync App</Text>
        <Input placeholder="email" />
        <Input
          placeholder="password"
          secureTextEntry={passwordHidden}
          rightIcon={
            <Icon
              name={passwordHidden ? 'eye-slash' : 'eye'}
              size={12}
              color="black"
              onPress={() => setPasswordHidden(!passwordHidden)}
            />
          }
        />

        <Button
          title="Go to Tasks Screen"
          onPress={() => navigation.navigate('Tasks')}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
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
