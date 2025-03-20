import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert, StyleSheet, Dimensions } from 'react-native';
import styles from '../styles/styles';

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdate = () => {
    if (!name || !email || !phone || !address) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    Alert.alert('Success', 'Profile updated successfully.');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>\
      <Text style={[styles.dashboardSubtitle, { color: '#fff', fontSize: 35, fontWeight: 'bold', marginTop: 20 }]}>Update Profile</Text>
      <View style={localStyles.card}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleUpdate}>
          <Text style={styles.loginButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: Dimensions.get('window').width - 100, // Adjust width to fit the screen
    alignSelf: 'center',
  },
});

export default UpdateProfile;
