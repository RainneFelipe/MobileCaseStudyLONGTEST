import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { setRegisteredUser } from '../utils/userStore'; // Import the setter function

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to track errors

  const handleRegister = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = true;
    if (!lastName) newErrors.lastName = true;
    if (!email) newErrors.email = true;
    if (!username) newErrors.username = true;
    if (!password) newErrors.password = true;
    if (!confirmPassword) newErrors.confirmPassword = true;

    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      newErrors.emptyFields = 'Fields cannot be empty.';
    }
    if (username.length <= 3) {
      newErrors.username = 'Username must be more than 3 letters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setRegisteredUser({ username, password }); // Store only username and password
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Golden Treasure Baptist Academy</Text>
        <Text style={styles.subtitle}>Account Registration</Text>
        {errors.emptyFields && (
          <Text style={styles.errorText}>{errors.emptyFields}</Text>
        )}
        <View style={[styles.inputGroup, { flexDirection: 'row' }]}>
          <TextInput
            style={[
              styles.input,
              { flex: 1, marginRight: 5 },
              errors.firstName && { borderColor: 'red' }, // Highlight only if there's an error
            ]}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[
              styles.input,
              { flex: 1, marginLeft: 5 },
              errors.lastName && { borderColor: 'red' }, // Highlight only if there's an error
            ]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.email && { borderColor: 'red' }, // Highlight only if there's an error
            ]}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
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
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.password && { borderColor: 'red' }, // Highlight only if there's an error
              password !== confirmPassword && { borderColor: 'red' },
            ]}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.confirmPassword && { borderColor: 'red' }, // Highlight only if there's an error
              password !== confirmPassword && { borderColor: 'red' },
            ]}
            placeholder="Re-enter your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleRegister}
        >
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Already have an account?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;