import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from '../styles/styles';
import AddUserIcon from '../assets/adduser.png';
import UploadIcon from '../assets/upload.png';
import UploadIconGray from '../assets/upload-gray.png';
import GradesIcon from '../assets/graduationhat.png';
import GradesIconGray from '../assets/graduationhat-gray.png';
import CoursesIcon from '../assets/book.png';
import ScheduleIcon from '../assets/calendar.png';
import FormsIcon from '../assets/file.png';
import ProfileIcon from '../assets/profile.png'; // Replace with the actual profile icon path
import HomeIcon from '../assets/home.png';
import DocumentsIcon from '../assets/documents.png';
import DashboardIcon from '../assets/dashboard.png';
import NotificationsIcon from '../assets/notifications.png';
import AnalyticsIcon from '../assets/analytics.png';
import LikesIcon from '../assets/likes.png';
import WalletIcon from '../assets/wallet.png';
import LogoutIcon from '../assets/logout.png';

const DashboardScreen = ({ navigation }) => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-250)).current; // Update initial value

  const toggleSidebar = () => {
    if (isSidebarActive) {
      Animated.timing(sidebarAnimation, {
        toValue: -250, // Match sidebar width
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
      <SafeAreaView style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
        <View style={styles.dashboardHeader}>
          <TouchableOpacity onPress={toggleSidebar} style={localStyles.hamburgerMenu}>
            <Text style={localStyles.hamburgerText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.dashboardTitle}>Golden Treasure Baptist Academy</Text>
          <Image source={require('../assets/logo.png')} style={styles.dashboardLogo} />
        </View>
        <Animated.View style={[localStyles.sidebar, { left: sidebarAnimation }]}>
          <View style={localStyles.sidebarHeader}>
            <Image source={ProfileIcon} style={localStyles.profileIcon} />
            <View>
              <Text style={localStyles.profileName}>Student Name</Text>
              <Text style={localStyles.profileRole}>Student</Text>
            </View>
          </View>
          <View style={localStyles.sidebarLinks}>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={HomeIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={UploadIconGray} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Upload Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={DocumentsIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>My Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={GradesIconGray} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Student Application Form</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={DashboardIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={NotificationsIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={AnalyticsIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={LikesIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.sidebarLink}>
              <Image source={WalletIcon} style={localStyles.sidebarIcon} />
              <Text style={localStyles.sidebarText}>Wallets</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={localStyles.logoutLink}>
            <Image source={LogoutIcon} style={localStyles.sidebarIcon} />
            <Text style={localStyles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
        <ScrollView contentContainerStyle={styles.dashboardContainer}>
          <View style={localStyles.dailyVerseCard}>
            <Text style={localStyles.dailyVerseTitle}>📖 Daily Verse</Text>
            <Text style={localStyles.dailyVerseText}>
              Train up a child in the way he should go: and when he is old, he will not depart from it.
            </Text>
            <Text style={localStyles.dailyVerseReference}>Proverbs 22:6</Text>
          </View>
          <View style={localStyles.welcomeCard}>
            <Text style={localStyles.welcomeTitle}>Welcome to the GTBA Portal</Text>
            <Text style={localStyles.welcomeSubtitle}>
              Your gateway to academic success at Golden Treasure Baptist Academy.
            </Text>
            <TouchableOpacity style={localStyles.actionButton} onPress={() => navigation.navigate('StudentApplication')}>
              <Image source={AddUserIcon} style={localStyles.actionIcon} />
              <Text style={localStyles.actionButtonText}>New Student Application</Text>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.actionButton} onPress={() => navigation.navigate('UploadDocuments')}>
              <Image source={UploadIcon} style={localStyles.actionIcon} />
              <Text style={localStyles.actionButtonText}>Upload Documents</Text>
            </TouchableOpacity>
          </View>
          <View style={localStyles.quickAccess}>
            <Text style={localStyles.quickAccessTitle}>⭐ Quick Access</Text>
            <View style={localStyles.quickAccessRow}>
              <TouchableOpacity style={localStyles.quickAccessCard} onPress={() => navigation.navigate('ViewGrades')}>
                <Image source={GradesIcon} style={localStyles.quickAccessIcon} />
                <Text style={localStyles.quickAccessText}>Grades</Text>
                <Text style={localStyles.quickAccessSubtitle}>View your academic performance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={localStyles.quickAccessCard} onPress={() => navigation.navigate('ManageCourses')}>
                <Image source={CoursesIcon} style={localStyles.quickAccessIcon} />
                <Text style={localStyles.quickAccessText}>Courses</Text>
                <Text style={localStyles.quickAccessSubtitle}>Access learning materials</Text>
              </TouchableOpacity>
            </View>
            <View style={localStyles.quickAccessRow}>
              <TouchableOpacity style={localStyles.quickAccessCard}>
                <Image source={ScheduleIcon} style={localStyles.quickAccessIcon} />
                <Text style={localStyles.quickAccessText}>Schedule</Text>
                <Text style={localStyles.quickAccessSubtitle}>Check your class schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={localStyles.quickAccessCard}>
                <Image source={FormsIcon} style={localStyles.quickAccessIcon} />
                <Text style={localStyles.quickAccessText}>Forms</Text>
                <Text style={localStyles.quickAccessSubtitle}>Download GTBA forms</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.announcementContainer}>
            <Text style={styles.announcementTitle}>Announcements</Text>
            <View style={styles.announcementItem}>
              <Text style={styles.announcementText}>Midterm Exams</Text>
              <Text style={styles.announcementDetail}>
                Midterm exams will start on March 20, 2025. Please check your schedule.
              </Text>
            </View>
            <View style={styles.announcementItem}>
              <Text style={styles.announcementText}>Parent-Teacher Conference</Text>
              <Text style={styles.announcementDetail}>
                Parent-teacher conference is scheduled for March 25, 2025.
              </Text>
            </View>
            <View style={styles.announcementItem}>
              <Text style={styles.announcementText}>Enrollment</Text>
              <Text style={styles.announcementDetail}>
                Enrollment for the next semester begins on April 1, 2025.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const localStyles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: -250, // Match initial animation value
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
  welcomeCard: {
    backgroundColor: '#6fb1fc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dailyVerseCard: {
    backgroundColor: '#d9eaff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  dailyVerseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailyVerseText: {
    fontSize: 14,
    marginBottom: 10,
  },
  dailyVerseReference: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  quickAccess: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    paddingHorizontal: 20, // Add more horizontal padding to the container
  },
  quickAccessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginHorizontal: 10, // Add margin to the row
  },
  quickAccessCard: {
    width: '45%', // Set explicit width instead of flex
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 8, // Increase space between cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quickAccessIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  quickAccessText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4364f7',
    marginBottom: 5,
  },
  quickAccessSubtitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});

export default DashboardScreen;
