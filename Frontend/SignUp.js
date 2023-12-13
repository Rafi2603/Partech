import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const { userid, username, phone, email, password } = route.params;

  const handleSignUp = async () => {
    try {
      if (!isValidUsername(username) || !isValidPhoneNumber(phoneNumber) || !isValidEmail(email) || !isValidPassword(password)) {
        console.log('Invalid input. Please check your input fields.');
        return;
      }

      const response = await axios.post('http://192.168.101.38/registeruser', {
        username,
        phoneNumber,
        email,
        password,
      });

      if (response.data.message === 'Registration Success') {
        navigation.navigate('Login');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const isValidUsername = (input) => /^[a-zA-Z0-9_]{3,20}$/.test(input);
  const isValidPhoneNumber = (input) => /^\d{10}$/.test(input);
  const isValidEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  const isValidPassword = (input) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(input);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>ParTech</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="white"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    width: '30%',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
