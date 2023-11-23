import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const TopUp = () => {
  const username = "Rayhan Akbar"; // Replace with actual username
  const phoneNumber = "08123456789"
  const currentBalance = "100.000,00"; // Replace with actual balance

  const handleConfirmTopUp = () => {
    // Add logic to handle the top-up confirmation
    console.log('Confirm TopUp button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title}>ParTech</Text>
        </View>
      </View>

      <View style={styles.middleSpace}>
        <View style={styles.informationContainer}>
          <Text style={styles.displayText}>Username: </Text>
          <Text style={styles.informationText}>{username}</Text>
          <Text style={styles.displayText}>Phone Number: </Text>
          <Text style={styles.informationText}>{phoneNumber}</Text>
          <Text style={styles.userInfoText}>Current Balance: </Text>
          <Text style={styles.informationText}>Rp{currentBalance}</Text>
        </View>
        <View style={styles.amountInputContainer}>
          <TextInput
            style={styles.amountInput}
            placeholder="Enter amount"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmTopUp}>
          <Text style={styles.confirmButtonText}>Confirm Top Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'left',
    justifyContent: 'left',
    marginTop: 35,
  },
  topContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  informationContainer: {
    marginBottom: 20,
    marginLeft: 10, // Add left margin
    alignItems: 'left',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  middleSpace: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  userInfoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  displayText:{
    color: 'white',
    fontSize: 20,
    marginTop: 8,
  },
  informationText:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 2,
  },
  userInfoText: {
    color: 'white',
    fontSize: 16,
  },
  amountInputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
  },
  amountInput: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
