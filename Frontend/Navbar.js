// NavBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = ({ username, balance }) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.balance}>{balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    width: '100%',
  },
  username: {
    color: 'white',
    fontSize: 16,
  },
  balance: {
    color: 'white',
    fontSize: 16,
  },
});

export default NavBar;
