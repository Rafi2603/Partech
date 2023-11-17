import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!isValidUsername(username)) {
      console.log('Invalid username. Please enter a valid username.');
      return;
    }
  
    if (!isValidPhoneNumber(phoneNumber)) {
      console.log('Invalid phone number. Please enter a valid phone number.');
      return;
    }
    
    if (!isValidEmail(email)) {
      console.log('Invalid email. Please enter a valid email address.');
      return;
    }

    if (!isValidPassword(password)) {
      console.log('Invalid password. Password must be 6-20 characters and contain at least one digit, one lowercase letter, and one uppercase letter.');
      return;
    }
  
    console.log('Signing up:', { username, phoneNumber, email, password });
  
    // Add your SignUp logic here, such as making an API call or updating state
    navigation.navigate('Login');
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
    marginTop: 35,
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
