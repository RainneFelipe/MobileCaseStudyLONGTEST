import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ManageCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Schedule</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>SubjectCode</Text>
            <Text style={styles.tableHeader}>Day</Text>
            <Text style={styles.tableHeader}>From</Text>
            <Text style={styles.tableHeader}>To</Text>
            <Text style={styles.tableHeader}>Units</Text>
            <Text style={styles.tableHeader}>Section</Text>
            <Text style={styles.tableHeader}>Room</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>CS101</Text>
            <Text style={styles.tableCell}>MWF</Text>
            <Text style={styles.tableCell}>08:00:00</Text>
            <Text style={styles.tableCell}>09:30:00</Text>
            <Text style={styles.tableCell}>3</Text>
            <Text style={styles.tableCell}>CS1A</Text>
            <Text style={styles.tableCell}>Room101</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>MATH202</Text>
            <Text style={styles.tableCell}>TTh</Text>
            <Text style={styles.tableCell}>10:00:00</Text>
            <Text style={styles.tableCell}>11:30:00</Text>
            <Text style={styles.tableCell}>3</Text>
            <Text style={styles.tableCell}>MATH2B</Text>
            <Text style={styles.tableCell}>Room202</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>PHYS303</Text>
            <Text style={styles.tableCell}>F</Text>
            <Text style={styles.tableCell}>13:00:00</Text>
            <Text style={styles.tableCell}>16:00:00</Text>
            <Text style={styles.tableCell}>4</Text>
            <Text style={styles.tableCell}>PHYS3C</Text>
            <Text style={styles.tableCell}>Lab1</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>ENG404</Text>
            <Text style={styles.tableCell}>MW</Text>
            <Text style={styles.tableCell}>14:00:00</Text>
            <Text style={styles.tableCell}>15:30:00</Text>
            <Text style={styles.tableCell}>3</Text>
            <Text style={styles.tableCell}>ENG4D</Text>
            <Text style={styles.tableCell}>Room303</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Assessment</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Tuition Fee</Text>
            <Text style={styles.tableCell}>₱25,000.00</Text>
            <Text style={styles.tableHeader}>Down Payment</Text>
            <Text style={styles.tableCell}>₱10,000.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Miscellaneous Fees</Text>
            <Text style={styles.tableCell}>₱7,500.00</Text>
            <Text style={styles.tableHeader}>2nd Payment</Text>
            <Text style={styles.tableCell}>₱5,000.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Supplementary Fees</Text>
            <Text style={styles.tableCell}>₱8,000.00</Text>
            <Text style={styles.tableHeader}>3rd Payment</Text>
            <Text style={styles.tableCell}>₱5,000.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Laboratory Fees</Text>
            <Text style={styles.tableCell}>₱6,000.00</Text>
            <Text style={styles.tableHeader}>4th Payment</Text>
            <Text style={styles.tableCell}>₱5,000.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Back Account</Text>
            <Text style={styles.tableCell}>₱0.00</Text>
            <Text style={styles.tableHeader}>5th Payment</Text>
            <Text style={styles.tableCell}>₱5,000.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Net Assessment</Text>
            <Text style={styles.tableCell}>₱46,500.00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#6fb1fc', 
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    padding: 8,
  },
});

export default ManageCourses;
