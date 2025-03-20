import React from 'react';
import { SafeAreaView, Text, View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import styles from '../styles/styles';

const gradesData = [
  { subject: 'Mathematics', grade: 84, remark: 'Passed', faculty: 'SMITH, JOHN' },
  { subject: 'English', grade: 90, remark: 'Passed', faculty: 'DOE, JANE' },
  { subject: 'Science', grade: 93, remark: 'Passed', faculty: 'BROWN, MICHAEL' },
  { subject: 'Physical Education', grade: 90, remark: 'Passed', faculty: 'JOHNSON, EMILY' },
  { subject: 'Technology and Livelihood Education', grade: 91, remark: 'Passed', faculty: 'DAVIS, SARAH' },
  { subject: 'Social Sciences', grade: 85, remark: 'Passed', faculty: 'WILSON, DAVID' },
  { subject: 'Information and Communication Technology', grade: 86, remark: 'Passed', faculty: 'MARTINEZ, LUCY' },
];

const ViewGrades = () => {
  const renderGradeItem = ({ item }) => (
    <View style={enhancedStyles.gradeRow}>
      <Text style={enhancedStyles.cell}>{item.subject}</Text>
      <Text style={enhancedStyles.cell}>{item.grade}</Text>
      <Text style={enhancedStyles.cell}>{item.remark}</Text>
      <Text style={enhancedStyles.cell}>{item.faculty}</Text>
    </View>
  );

  return (
    <SafeAreaView style={enhancedStyles.container}>
      <Text style={enhancedStyles.title}>Grades Listing</Text>
      <View style={enhancedStyles.gradeCard}>
        <View style={enhancedStyles.gradeRow}>
          <Text style={[enhancedStyles.cell, enhancedStyles.gradeHeader]}>Course</Text>
          <Text style={[enhancedStyles.cell, enhancedStyles.gradeHeader]}>Grade</Text>
          <Text style={[enhancedStyles.cell, enhancedStyles.gradeHeader]}>Remark</Text>
          <Text style={[enhancedStyles.cell, enhancedStyles.gradeHeader]}>Faculty Name</Text>
        </View>
        <FlatList
          data={gradesData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderGradeItem}
          contentContainerStyle={enhancedStyles.gradesList}
        />
      </View>
    </SafeAreaView>
  );
};

const enhancedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fb1fc',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    paddingTop: 60,
    color: '#fff',
  },
  gradeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: Dimensions.get('window').width - 40, // Adjust width to fit the screen
    alignSelf: 'center',
  },
  gradeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  gradesList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  gradeHeader: {
    fontWeight: 'bold',
  },
});

export default ViewGrades;
