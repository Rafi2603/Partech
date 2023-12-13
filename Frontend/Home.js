  import React, { useState, useEffect } from 'react';
  import { useRoute } from '@react-navigation/native';
  import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
  import axios from 'axios';
  // import { useRoute } from '@react-navigation/native';
  // import { route } from '../Backend - Folder/src/routes/routes';

  const Home = ({ navigation }) => {
    const route = useRoute();
    const { userID, username, balance, email, phone } = route.params;
    console.log(route.params);

    const handleParkNow = () => {
      navigation.navigate('CameraScreen');
    };

    const handleTopUp = () => {
      console.log('TopUp button pressed');
    
      // Pass user information to the 'TopUp' screen
      navigation.navigate('TopUp', {
        userid: userID, // Use 'userid' instead of 'username'
        username,
        balance,
        email,
        phone,
      });
    };
    

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topRow}>
            {/* Circular profile picture */}
            <View style={styles.profilePicture}></View>

            <View style={styles.userInfo}>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.balance}>Balance: Rp{balance}</Text>
            </View>

            <TouchableOpacity style={styles.topUpButton} onPress={handleTopUp}>
              <Text style={styles.navButtonTextTopUp}>TopUp</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Space in the middle */}
        <View style={styles.middleSpace}></View>

        <View style={styles.topContainer}>
          <View style={styles.bottomNavbar}>
            <TouchableOpacity style={styles.navButtonBlue}>
              <Text style={styles.navButtonTextWhite}>Check Availability</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleParkNow}>
              <Text style={styles.navButtonText}>Park Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButtonBlue}>
              <Text style={styles.navButtonTextWhite}>History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  export default Home;

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
      alignItems: 'flex-start', // Align items to the left
      backgroundColor: 'blue', // Set the background color to blue
      padding: 10, // Add padding for better appearance
      borderRadius: 5, // Add border radius for rounded corners
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Center vertically
      width: '100%',
    },
    profilePicture: {
      width: 40, // Adjust the size of the profile picture
      height: 40, // Adjust the size of the profile picture
      borderRadius: 20, // Make it a circle
      backgroundColor: 'white', // You can set the background color or add an image source
      marginRight: 10, // Add some space between the profile picture and the text
    },
    userInfo: {
      flex: 1,
    },
    middleSpace: {
      flex: 1,
    },
    username: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    balance: {
      color: 'white',
      fontSize: 12,
    },
    topUpButton: {
      backgroundColor: 'white',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
    },
    bottomNavbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      width: '100%',
    },
    navButton: {
      backgroundColor: 'white',
      paddingVertical: 2, // Adjust the vertical padding to reduce height
      paddingHorizontal: 2, // Adjust the horizontal padding to reduce length
      borderRadius: 100, // Adjust the border radius for a slightly rounded look
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navButtonBlue: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      width: '30%',
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center',
    },
    navButtonText: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
    navButtonTextWhite: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    navButtonTextTopUp: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });
