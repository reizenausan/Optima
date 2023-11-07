import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import your logo image from the assets folder
import logo from '../assets/logo(3).png';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Here, you can implement the logic for authentication.
    // For simplicity, let's assume valid credentials are 'admin' and 'password'.
    if (username === 'admin' && password === 'password') {
      // Navigate to Dashboard screen upon successful login
      navigation.navigate('Dashboard');
    } else {
      // Display an error message for invalid credentials (you can customize this logic)
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Login as Staff</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D1EAF0',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black', // Set text color to black
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
    width: '20%', // Adjust the input field width
  },
  loginButton: {
    backgroundColor: '#D1EAF0', // Set the background color of the button
    padding: 10,
    borderRadius: 5,
    width: '10%', // Adjust the button width
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Set the text color of the button text to black
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
