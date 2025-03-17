import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import styles from '../styles/styles';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={require('../assets/profile-pic.png')} style={styles.drawerProfileImage} />
        <Text style={styles.drawerProfileName}>a a</Text>
        <Text style={styles.drawerProfileRole}>Student</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        labelStyle={styles.drawerLogoutLabel}
        onPress={() => alert('Logout')}
        icon={() => <Image source={require('../assets/logout-icon.png')} style={styles.drawerIcon} />}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
