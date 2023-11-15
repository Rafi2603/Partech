import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome has a QR code icon

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}>
        <View style={styles.topContainer}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.balance}>Balance</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.greeting}>Hi Username!</Text>
          <Text style={styles.smiley}>😊</Text>
          <Text style={styles.noVehicle}>You don't have a parked vehicle</Text>
          <Icon name="qrcode" size={50} color="white" style={styles.qrCode} />
        </View>
        <View style={styles.bottomContainer}>
          <Button title="Check Availability" color="#f194ff" />
          <Button title="Park Now" color="#f194ff" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  username: {
    color: 'white',
    fontSize: 16,
  },
  balance: {
    color: 'white',
    fontSize: 16,
  },
  middleContainer: {
    alignItems: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  smiley: {
    fontSize: 40,
    marginBottom: 10,
  },
  noVehicle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  qrCode: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    color: 'white',
  },
  bottomContainer: {
    marginTop: 20,
  },
});

export default Home;