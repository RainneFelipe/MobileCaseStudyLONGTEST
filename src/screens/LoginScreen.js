import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { getRegisteredUser } from '../utils/userStore'; // Import the getter function

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to track errors

  const handleLogin = () => {
    const registeredUser = getRegisteredUser(); // Retrieve the registered user
    const newErrors = {};

    if (!username) newErrors.username = true;
    if (!password) newErrors.password = true;

    if (Object.keys(newErrors).length > 0) {
      newErrors.general = 'All fields are required.';
      setErrors(newErrors);
      return;
    }

    if (
      registeredUser &&
      (username !== registeredUser.username || password !== registeredUser.password)
    ) {
      newErrors.credentials = 'Invalid username or password.';
      setErrors(newErrors);
      return;
    }

    setErrors({});
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Golden Treasure Baptist Academy</Text>
        {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.username && { borderColor: 'red' }, // Highlight only if there's an error
            ]}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.password && { borderColor: 'red' }, // Highlight only if there's an error
            ]}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {errors.credentials && (
          <Text style={styles.errorText}>{errors.credentials}</Text>
        )}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;