import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ data }) => {
    // Handle QR code scan result here
    console.log('QR code scanned:', data);
    navigation.navigate('ParkingDetails', { parkingId: data });
  };

  const renderCamera = () => {
    if (hasPermission === null) {
      return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Camera
        style={{ flex: 1 }}
        onBarCodeScanned={handleBarCodeScanned}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderCamera()}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
  },
});


