import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const username = 'rafi';
  // const password = '12345678';
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const handleLogin = async () => {
    try {
      // Make a POST request to the backend login endpoint
      const response = await axios.post('http://192.168.75.50:5000/loginuser', {
        username,
        password,
      });
      // Handle the response from the backend
      // Handle the response from the backend
      if (response.data.message === 'Login Success') {
        // Pass user data to the Home screen upon successful login
        const { userid, username, balance, email, phone, status } = response.data.user;
        navigation.navigate('Home', {
            userID: userid,
            username: username,
            balance: balance,
            email: email,
            phone: phone,
            status: status,
        });
      } else {
        // Display an error message for unsuccessful login
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>ParTech</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          placeholderTextColor="white" // Set placeholder text color to white
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="white" // Set placeholder text color to white
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupContainer} onPress={goToSignUp}>
        <Text style={styles.signupText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    width: '30%', // Adjust the width as needed
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signupContainer: {
    marginTop: 20,
  },
  signupText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});