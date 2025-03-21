import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const Header = ({ toggleSidebar }) => {
  return (
    <View style={styles.dashboardHeader}>
      <TouchableOpacity onPress={toggleSidebar} style={localStyles.hamburgerMenu}>
        <Text style={localStyles.hamburgerText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.dashboardTitle}>Golden Treasure Baptist Academy</Text>
      <Image source={require('../assets/logo.png')} style={styles.dashboardLogo} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  hamburgerMenu: {
    marginRight: 10,
  },
  hamburgerText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;
