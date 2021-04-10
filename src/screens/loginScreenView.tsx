import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const [error, setError] = React.useState({
    status: false,
    errorMessage: '',
  });

  const onSubmit = () => {
    if (username) {
      if (password === 'demo') {
        navigation.navigate('Dashboard', {username});
        setUsername('');
        setPassword('');
        setError({
          status: false,
          errorMessage: '',
        });
      } else {
        setError({
          status: true,
          errorMessage: 'Invalid password',
        });
      }
    } else {
      setError({
        status: true,
        errorMessage: 'Please enter a username',
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#EF0D33" />
      <View style={styles.container}>
        <ScrollView style={styles.loginScrollView}>
          <Image
            source={require('./../images/logo_transparent.png')}
            style={styles.loginLogo}
          />
          <Text style={styles.demoText}>Password hint : demo</Text>
          {error.status && (
            <Text style={styles.errorText}>{error.errorMessage}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            placeholder="username"
            value={username}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholder="password"
            value={password}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="LOGIN"
                color="#EF0D33"
                onPress={() => onSubmit()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF0D33',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginScrollView: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 400,
    position: 'absolute',
    flex: 1,
    top: 100,
    padding: 20,
  },
  demoText: {
    color: '#778691',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: '#EF0D33',
    textAlign: 'center',
    marginTop: 20,
    marginBottom:-5
  },
  loginLogo: {
    width: 110,
    height: 70,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    top: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontFamily: 'Montserrat',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 40,
    width: 150,
    height: 40,
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
  },
});

export default LoginScreen;
