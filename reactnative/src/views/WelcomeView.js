import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export function WelcomeView({navigation, route}) {
  const [passwordHidden, setPasswordHidden] = useState(true); // true by default
  const [isInSignUpMode, setIsInSignUpMode] = useState(true);

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
        {isInSignUpMode ? (
          <>
            <Button title="Create Account" buttonStyle={styles.mainButton} />
            <Button
              title="Already have an account? Log In"
              type="clear"
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        ) : (
          <>
            <Button title="Log In" buttonStyle={styles.mainButton} />
            <Button
              title="Don't have an account? Create Account"
              type="clear"
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  mainButton: {
    width: 350,
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
