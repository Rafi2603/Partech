import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const TopUp = ({ route, navigation }) => {
  const { username, email, phone, balance, userid } = route.params;
  const [currentBalance, setCurrentBalance] = useState(balance);
  const [amount, setAmount] = useState("");

  const handleConfirmTopUp = async () => {
    try {
      const numericAmount = parseInt(amount.replace(',', '')); // Use parseFloat for decimal values
      if (isNaN(numericAmount) || numericAmount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
      }

      const response = await axios.put('http://192.168.75.50:5000/topup', {
        userid,
        balance: numericAmount,
      });

      if (response.data.message === 'TopUp Success') {
        setCurrentBalance(response.data.balance); // Update the balance with the response from the backend
        alert('Top-up successful!');
        navigation.navigate('Home', {
          username,
          userid,
          email,
          phone,
          balance: response.data.currentBalance, // Pass the updated balance to the Home screen
        });
      } else {
        alert('Top-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during top-up:', error);
    }
  };

  const goToHome = () => {
    navigation.navigate('Home', {
      username,
      userid,
      email,
      phone,
      balance: balance, // Pass the current balance to the Home screen
      status,
    });
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
          <Text style={styles.displayText}>Email: </Text>
          <Text style={styles.informationText}>{email}</Text>
          <Text style={styles.displayText}>Phone Number: </Text>
          <Text style={styles.informationText}>{phone}</Text>
          <Text style={styles.userInfoText}>Current Balance: </Text>
          <Text style={styles.informationText}>Rp{currentBalance}</Text>
        </View>
        <View style={styles.amountInputContainer}>
          <TextInput
            style={styles.amountInput}
            placeholder="Enter amount"
            keyboardType="numeric"
            onChangeText={(text) => setAmount(text)}
          />
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmTopUp}>
          <Text style={styles.confirmButtonText}>Confirm Top Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
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
    marginBottom: 5,
  },
  amountInputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
    marginLeft: 10,
  },
  amountInput: {
    paddingHorizontal: 10,
    fontSize: 16,
    height: 40,
  },
  confirmButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    marginLeft: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
