import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>GTBA Portal</Text>
        <Image source={require('../assets/logo.png')} style={styles.dashboardLogo} />
      </View>
      <Text style={[styles.dashboardSubtitle, { color: '#fff', fontSize: 35, fontWeight: 'bold', marginTop: 20 }]}>
        Dashboard
      </Text>
      <ScrollView contentContainerStyle={styles.dashboardContainer}>
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
        <View style={styles.dashboardButtons}>
          <TouchableOpacity 
            style={styles.dashboardCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ViewGrades')} // Ensure 'ViewGrades' is registered in the navigation stack
          >
            <Text style={styles.dashboardCardTitle}>View Grades</Text>
            <Text style={styles.dashboardCardText}>Check your academic performance and progress.</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.dashboardCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ManageCourses')}
            >
            <Text style={styles.dashboardCardTitle}>Manage Courses</Text>
            <Text style={styles.dashboardCardText}>Enroll in courses and view your tentative schedule</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.dashboardButtons, { marginTop: 20 }]}>
          <TouchableOpacity 
            style={styles.dashboardCard}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('UpdateProfile')}
          >
            <Text style={styles.dashboardCardTitle}>Update Profile</Text>
            <Text style={styles.dashboardCardText}>Keep your personal information up-to-date.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
