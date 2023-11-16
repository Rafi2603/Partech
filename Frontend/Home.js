import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const username = "Rayhan Akbar"; // Replace with actual username
  const balance = "100.000,00"; // Replace with actual balance

  const handleParkNow = () => {
    navigation.navigate('CameraScreen'); // Navigate to the CameraScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.balance}>Balance: Rp{balance}</Text>
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
  },
  topContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    backgroundColor: 'blue', // Set the background color to blue
    padding: 10, // Add padding for better appearance
    borderRadius: 5, // Add border radius for rounded corners
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
});

