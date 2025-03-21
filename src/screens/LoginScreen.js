import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRegisteredUser } from '../utils/userStore';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const registeredUser = getRegisteredUser();
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
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
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.username && { borderColor: 'red' },
            ]}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.password && { borderColor: 'red' },
            ]}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
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