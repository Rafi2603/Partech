import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [scannedData, setScannedData] = useState(null);

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
    setScannedData(data);
    setIsCameraOpen(false);
  };

  const renderCamera = () => {
    if (!isCameraOpen) {
      return null;
    }

    if (hasPermission === null) {
      return <Text>Requesting camera permission...</Text>;
    }

    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          onBarCodeScanned={handleBarCodeScanned}
        />
        <View style={styles.overlay}>
          <View style={styles.squareOverlay} />
        </View>
      </View>
    );
  };

  const handleCancelPress = () => {
    if (isCameraOpen) {
      navigation.goBack();
    } else {
      setIsCameraOpen(true);
      setScannedData(null);
    }
  };

  return (
    <View style={styles.container}>
      {renderCamera()}
      {scannedData && (
        <View style={styles.overlay}>
          <Text style={styles.scannedText}>Scanned: {scannedData}</Text>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancelPress()}
          >
            <Text style={styles.cancelButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      {!isCameraOpen && !scannedData && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => handleCancelPress()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const squareSize = 150; // Adjust the size of the square overlay as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareOverlay: {
    width: squareSize,
    height: squareSize,
    borderColor: 'white',
    borderRadius: 30,
    borderWidth: 2,
  },
  scannedText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
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

export default CameraScreen;
