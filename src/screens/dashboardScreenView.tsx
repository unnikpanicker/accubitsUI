import React from 'react';
import {View, StyleSheet, Text, StatusBar, Image, Alert} from 'react-native';
import {IDashboardProps} from '../types';
import {useNavigation} from '@react-navigation/core';

const DashboardScreen = ({route}: IDashboardProps) => {
  const navigation = useNavigation();
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        Alert.alert(
          'Do you want to logout?',
          'You are trying to leave the dashboard. Are you sure ?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Logout',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      }),
    [navigation],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.welcomeView}>
          <Image
            source={require('./../images/logo_transparent.png')}
            style={styles.loginLogo}
          />
          <Text style={styles.welcomeText}>Welcome </Text>
          <Text style={styles.userNameText}>{route.params.username} </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeView: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 350,
    position: 'absolute',
    flex: 1,
    top: 100,
    padding: 20,
  },
  welcomeText: {
    color: '#EF0D33',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 24,
  },
  userNameText: {
    color: '#EF0D33',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontSize: 20,
  },
  loginLogo: {
    width: 110,
    height: 70,
    alignSelf: 'center',
  },
});

export default DashboardScreen;
