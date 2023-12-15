import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const route = useRoute();  // Fix the typo here
  const [username, setUsername] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if (! isValidUsername(username) || !isValidphone(phone) || !isValidEmail(email) || !isValidPassword(password)) {
        console.log('Invalid input. Please check your input fields.');
        return;
      }

      const response = await axios.post('http://192.168.75.50:5000/registeruser', {
        username,
        password,
        email,
        phone,
      });
      console.log(response.data); // Add this line
      console.log(phone); // Add this line
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
   const isValidphone = (input) => /^\d{10}$/.test(input);
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
          value={phone}
          onChangeText={(text) => setphone(text)}
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
