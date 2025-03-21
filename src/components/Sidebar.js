import React from 'react';
import { View, Text, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
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

const Sidebar = ({ sidebarAnimation, overlayAnimation, isSidebarActive, closeSidebar }) => {
  return (
    <>
      <Animated.View 
        style={[
          styles.overlay,
          {
            opacity: overlayAnimation,
            pointerEvents: isSidebarActive ? 'auto' : 'none',
          }
        ]}
      >
        <TouchableOpacity
          style={styles.overlayTouchable}
          activeOpacity={1}
          onPress={closeSidebar}
        />
      </Animated.View>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: sidebarAnimation }] }]}>
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
    </>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 20, // Ensure the sidebar is above the overlay
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 15,
  },
  overlayTouchable: {
    flex: 1,
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
  sidebarLinks: {
    flex: 1,
  },
  sidebarLink: {
    flexDirection: 'row', // Ensure icon and text are side by side
    alignItems: 'center', // Align items vertically
    paddingVertical: 10,
  },
  sidebarIcon: {
    width: 20,
    height: 20,
    marginRight: 15, // Add spacing between icon and text
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
  },
});

export default Sidebar;
