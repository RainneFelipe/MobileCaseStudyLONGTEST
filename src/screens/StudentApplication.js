import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Image, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import GradesIcon from '../assets/graduationhat.png';
// ...existing imports...

const StudentApplication = () => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.parentCard}>
          <View style={styles.parentCardHeader}>
            <Text style={styles.parentCardTitle}>Student Application Form</Text>
            <Text style={styles.parentCardSubtitle}>For New and Transfer Students</Text>
            <Text style={styles.parentCardNote}>All fields are required.</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.titleRow}>
              <Image source={GradesIcon} style={styles.icons}/>
              <Text style={styles.cardTitle}>Enrollment Information</Text>
            </View>
            <TextInput style={styles.input} placeholder="School Year to Enroll *" />
            <Picker style={styles.input}>
              <Picker.Item label="Select Grade" value="" />
              <Picker.Item label="Nursery" value="nursery" />
              <Picker.Item label="Kindergarten" value="kindergarten" />
              <Picker.Item label="Grade 1" value="grade1" />
              <Picker.Item label="Grade 2" value="grade2" />
              <Picker.Item label="Grade 3" value="grade3" />
              <Picker.Item label="Grade 4" value="grade4" />
              <Picker.Item label="Grade 5" value="grade5" />
              <Picker.Item label="Grade 6" value="grade6" />
              <Picker.Item label="Grade 7" value="grade7" />
              <Picker.Item label="Grade 8" value="grade8" />
              <Picker.Item label="Grade 9" value="grade9" />
              <Picker.Item label="Grade 10" value="grade10" />
            </Picker>
            <TextInput 
              style={styles.input} 
              placeholder="Learner Reference Number (LRN) *"
              maxLength={12}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.card}>
            <View style={styles.titleRow}>
                <Image source={GradesIcon} style={styles.icons}/>
                <Text style={styles.cardTitle}>Student Information</Text>
            </View>
            <TextInput style={styles.input} placeholder="Last Name *" />
            <TextInput style={styles.input} placeholder="Given Name *" />
            <TextInput style={styles.input} placeholder="Middle Name" />
            <Picker style={styles.input}>
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
            <TextInput style={styles.input} placeholder="Date of Birth *" />
            <TextInput style={styles.input} placeholder="Religion *" />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Address Information</Text>
            <TextInput style={styles.input} placeholder="Present Address *" />
            <TextInput style={styles.input} placeholder="Permanent Address *" />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Medical Information</Text>
            <Picker style={styles.input}>
              <Picker.Item label="Does the student have any disabilities or special needs?" value="" />
              <Picker.Item label="No" value="no" />
              <Picker.Item label="Yes" value="yes" />
            </Picker>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Parent/Guardian Information</Text>
            <Text style={styles.sectionTitle}>Father's Information</Text>
            <TextInput style={styles.input} placeholder="Full Name *" />
            <TextInput style={styles.input} placeholder="Occupation *" />
            <TextInput style={styles.input} placeholder="Contact Number *" />
            <TextInput style={styles.input} placeholder="Email Address *" />

            <Text style={styles.sectionTitle}>Mother's Information</Text>
            <TextInput style={styles.input} placeholder="Full Name *" />
            <TextInput style={styles.input} placeholder="Occupation *" />
            <TextInput style={styles.input} placeholder="Contact Number *" />
            <TextInput style={styles.input} placeholder="Email Address *" />

            <Text style={styles.sectionTitle}>Legal Guardian's Information</Text>
            <TextInput style={styles.input} placeholder="Full Name *" />
            <TextInput style={styles.input} placeholder="Occupation *" />
            <TextInput style={styles.input} placeholder="Contact Number *" />
            <TextInput style={styles.input} placeholder="Email Address *" />
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit Application</Text>
            </Pressable>
            <Pressable style={styles.clearButton}>
              <Text style={styles.buttonText}>Clear Form</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  parentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  parentCardHeader: {
    backgroundColor: '#4a90e2',
    padding: 20,
    alignItems: 'center',
  },
  parentCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  parentCardSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginBottom: 10,
  },
  parentCardNote: {
    fontSize: 12,
    color: '#fff',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10, // Reduced padding
    marginTop: 20,
    marginBottom: 15, // Reduced margin
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%', // Reduce horizontal space usage
    alignSelf: 'center', // Center the card horizontally
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    width: '100%', // Ensure inputs take full width of the card
  },

  icons: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default StudentApplication;
