import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import ProfileIcon from '../assets/profile.png';
import HomeIcon from '../assets/home.png';
import UploadIconGray from '../assets/upload-gray.png';
import DocumentsIcon from '../assets/documents.png';
import GradesIconGray from '../assets/graduationhat-gray.png';
import DashboardIcon from '../assets/dashboard.png';
import NotificationsIcon from '../assets/notifications.png';
import AnalyticsIcon from '../assets/analytics.png';
import LikesIcon from '../assets/likes.png';
import WalletIcon from '../assets/wallet.png';
import LogoutIcon from '../assets/logout.png';

const HeaderSidebar = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-250)).current;

  const toggleSidebar = () => {
    if (isSidebarActive) {
      Animated.timing(sidebarAnimation, {
        toValue: -250,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setSidebarActive(false));
    } else {
      setSidebarActive(true);
      Animated.timing(sidebarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const closeSidebar = () => {
    if (isSidebarActive) {
      toggleSidebar();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={closeSidebar}>
      <View style={{ flex: 1 }}>
        <View style={styles.dashboardHeader}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerMenu}>
            <Text style={styles.hamburgerText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.dashboardTitle}>Golden Treasure Baptist Academy</Text>
          <Image source={require('../assets/logo.png')} style={styles.dashboardLogo} />
        </View>
        <Animated.View style={[styles.sidebar, { left: sidebarAnimation }]}>
          <View style={styles.sidebarHeader}>
            <Image source={ProfileIcon} style={styles.profileIcon} />
            <View>
              <Text style={styles.profileName}>Student Name</Text>
              <Text style={styles.profileRole}>Student</Text>
            </View>
          </View>
          <View style={styles.sidebarLinks}>
            <TouchableOpacity style={styles.sidebarLink}>
              <Image source={HomeIcon} style={styles.sidebarIcon} />
              <Text style={styles.sidebarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={UploadIconGray} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Upload Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={DocumentsIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>My Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={GradesIconGray} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Student Application Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={DashboardIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={NotificationsIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={AnalyticsIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={LikesIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarLink}>
                <Image source={WalletIcon} style={styles.sidebarIcon} />
                <Text style={styles.sidebarText}>Wallets</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutLink}>
            <Image source={LogoutIcon} style={styles.sidebarIcon} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  dashboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4364f7',
  },
  dashboardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  dashboardLogo: {
    width: 40,
    height: 40,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: -250,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 14,
    color: '#888',
  },
  closeButton: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#888',
  },
  sidebarLinks: {
    flex: 1,
  },
  sidebarLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sidebarIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  sidebarText: {
    fontSize: 14,
    color: '#333',
  },
  logoutLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 14,
    color: '#d9534f',
    marginLeft: 15,
  },
  hamburgerMenu: {
    marginRight: 10,
  },
  hamburgerText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HeaderSidebar;
