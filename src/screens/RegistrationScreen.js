import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import styles from '../styles/styles';
import { storeCredentials } from '../components/UserCredentials';

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 5;
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleInputChange = (field, value) => {
    // Clear error for the field being changed
    setErrors(prev => ({ ...prev, [field]: null, emptyFields: null }));

    // Update the corresponding state and validate
    switch (field) {
      case 'firstName':
        setFirstName(value);
        if (value.trim() === '') {
          setErrors(prev => ({ ...prev, firstName: 'First name is required' }));
        }
        break;
      case 'lastName':
        setLastName(value);
        if (value.trim() === '') {
          setErrors(prev => ({ ...prev, lastName: 'Last name is required' }));
        }
        break;
      case 'email':
        setEmail(value);
        if (!validateEmail(value)) {
          setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
        }
        break;
      case 'username':
        setUsername(value);
        if (!validateUsername(value)) {
          setErrors(prev => ({ ...prev, username: 'Username must be at least 5 characters long' }));
        }
        break;
      case 'password':
        setPassword(value);
        if (!validatePassword(value)) {
          setErrors(prev => ({ ...prev, password: 'Password must be at least 5 characters long' }));
        }
        if (confirmPassword && value !== confirmPassword) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: 'Passwords do not match'
          }));
        }
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        if (value !== password) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: 'Passwords do not match'
          }));
        }
        break;
    }
  };

  const handleRegister = async () => {
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
      newErrors.username = 'Username must be at least 5 characters long.';
    }
    if (password.length <= 3) {
      newErrors.password = 'Password must be at least 5 characters long.';
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

    const success = await storeCredentials({ 
      username, 
      password,
      firstName,
      lastName,
      email 
    });

    if (success) {
      setErrors({});
      navigation.navigate('Login');
    } else {
      setErrors({ registration: 'Failed to register. Please try again.' });
    }
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
              errors.firstName && { borderColor: 'red' },
            ]}
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          <TextInput
            style={[
              styles.input,
              { flex: 1, marginLeft: 5 },
              errors.lastName && { borderColor: 'red' },
            ]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.email && { borderColor: 'red' },
            ]}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.username && { borderColor: 'red' },
            ]}
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => handleInputChange('username', text)}
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
              password !== confirmPassword && { borderColor: 'red' },
            ]}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={[
              styles.input,
              errors.confirmPassword && { borderColor: 'red' },
              password !== confirmPassword && { borderColor: 'red' },
            ]}
            placeholder="Re-enter your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
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