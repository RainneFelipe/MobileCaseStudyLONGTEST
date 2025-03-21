import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Image, Pressable, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import GradesIcon from '../assets/graduationhat.png';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const StudentApplication = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-250)).current;
  const overlayAnimation = useRef(new Animated.Value(0)).current;
  
  // Add form state
  const [formData, setFormData] = useState({
    schoolYear: '',
    grade: '',
    lrn: '',
    lastName: '',
    givenName: '',
    middleName: '',
    gender: '',
    dateOfBirth: '',
    religion: '',
    presentAddress: '',
    permanentAddress: '',
    disabilities: '',
    fatherName: '',
    fatherOccupation: '',
    fatherContact: '',
    fatherEmail: '',
    motherName: '',
    motherOccupation: '',
    motherContact: '',
    motherEmail: '',
    guardianName: '',
    guardianOccupation: '',
    guardianContact: '',
    guardianEmail: '',
  });

  const [errors, setErrors] = useState({});
  const [hasInput, setHasInput] = useState(false);

  const checkForInput = (newFormData) => {
    return Object.values(newFormData).some(value => value !== '');
  };

  useEffect(() => {
    setHasInput(checkForInput(formData));
  }, [formData]);

  const handleInputChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    // Real-time validation for all fields
    if (field === 'schoolYear') {
      if (value.trim() === '') {
        setErrors(prev => ({ ...prev, schoolYear: 'School year is required' }));
      } else if (!/^\d{4}-\d{4}$/.test(value)) {
        setErrors(prev => ({ ...prev, schoolYear: 'School year format should be YYYY-YYYY' }));
      } else {
        setErrors(prev => ({ ...prev, schoolYear: '' }));
      }
    } else if (field === 'lrn') {
      if (value.trim() === '') {
        setErrors(prev => ({ ...prev, lrn: 'LRN is required' }));
      } else if (!/^\d{12}$/.test(value)) {
        setErrors(prev => ({ ...prev, lrn: 'Please match the requested format' }));
      } else {
        setErrors(prev => ({ ...prev, lrn: '' }));
      }
    } else if (['lastName', 'givenName', 'gender', 'dateOfBirth', 'religion'].includes(field)) {
      // Handle student information fields
      if (value.trim() === '') {
        setErrors(prev => ({ ...prev, [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` }));
      } else {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    } else {
      // Handle all other fields
      setErrors(prev => ({ ...prev, [field]: value.trim() === '' ? 'This field is required' : '' }));
    }
  };

  const handleClearForm = () => {
    if (hasInput) {
      setFormData({
        schoolYear: '',
        grade: '',
        lrn: '',
        lastName: '',
        givenName: '',
        middleName: '',
        gender: '',
        dateOfBirth: '',
        religion: '',
        presentAddress: '',
        permanentAddress: '',
        disabilities: '',
        fatherName: '',
        fatherOccupation: '',
        fatherContact: '',
        fatherEmail: '',
        motherName: '',
        motherOccupation: '',
        motherContact: '',
        motherEmail: '',
        guardianName: '',
        guardianOccupation: '',
        guardianContact: '',
        guardianEmail: '',
      });
      setErrors({});
    }
  };

  const validationRules = {
    schoolYear: [
      {test: value => value.trim() !== '', message: 'School year is required'},
      {test: value => /^\d{4}-\d{4}$/.test(value), message: 'School year format should be YYYY-YYYY'}
    ],
    grade: [
      {test: value => value !== '', message: 'Please select a grade level'}
    ],
    lrn: [
      {test: value => value.trim() !== '', message: 'LRN is required'},
      {test: value => /^\d{12}$/.test(value), message: 'LRN must be exactly 12 digits'}
    ],
    lastName: [
      {test: value => value.trim() !== '', message: 'Last name is required'}
    ],
    givenName: [
      {test: value => value.trim() !== '', message: 'Given name is required'}
    ],
    gender: [
      {test: value => value !== '', message: 'Please select a gender'}
    ],
    dateOfBirth: [
      {test: value => value !== '', message: 'Date of birth is required'},
      {test: value => new Date(value) < new Date(), message: 'Date of birth cannot be in the future'}
    ],
    religion: [
      {test: value => value.trim() !== '', message: 'Religion is required'}
    ],
    presentAddress: [
      {test: value => value.trim() !== '', message: 'Present address is required'}
    ],
    permanentAddress: [
      {test: value => value.trim() !== '', message: 'Permanent address is required'}
    ]
  };

  const validateForm = () => {
    let newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      const rules = validationRules[field];
      const value = formData[field];
      
      for (const rule of rules) {
        if (!rule.test(value)) {
          newErrors[field] = rule.message;
          break;
        }
      }
    });

    // Validate other required fields that don't have specific rules
    const otherRequiredFields = [
      'disabilities', 'fatherName', 'fatherOccupation', 'fatherContact', 'fatherEmail',
      'motherName', 'motherOccupation', 'motherContact', 'motherEmail',
      'guardianName', 'guardianOccupation', 'guardianContact', 'guardianEmail'
    ];

    otherRequiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Process form submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  const toggleSidebar = () => {
    const toValue = isSidebarActive ? -250 : 0;
    const overlayToValue = isSidebarActive ? 0 : 1;
    
    Animated.parallel([
      Animated.timing(sidebarAnimation, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: overlayToValue,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#f0f0f0' }]}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar 
        sidebarAnimation={sidebarAnimation}
        overlayAnimation={overlayAnimation}
        isSidebarActive={isSidebarActive}
        closeSidebar={() => toggleSidebar()}
      />
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
            <Text style={styles.sectionTitle}>School Year to Enroll</Text>
            <TextInput 
              style={[styles.input, errors.schoolYear && styles.inputError]}
              placeholder="School Year (e.g., 2023-2024) *"
              value={formData.schoolYear}
              onChangeText={(text) => handleInputChange('schoolYear', text)}
              maxLength={9}
              keyboardType="numeric"
            />
            {errors.schoolYear && <Text style={styles.errorText}>{errors.schoolYear}</Text>}
            <Text style={styles.sectionTitle}>Grade Level to Enroll</Text>
            <Picker
              style={[styles.input, errors.grade && styles.inputError]}
              selectedValue={formData.grade}
              onValueChange={(value) => handleInputChange('grade', value)}>
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
            {errors.grade && <Text style={styles.errorText}>{errors.grade}</Text>}
            <Text style={styles.sectionTitle}>Learner Reference Number (LRN)</Text>
            <TextInput 
              style={[styles.input, errors.lrn && styles.inputError]} 
              placeholder="Learner Reference Number (12 digits) *"
              maxLength={12}
              keyboardType="numeric"
              value={formData.lrn}
              onChangeText={(text) => handleInputChange('lrn', text)}
            />
            {errors.lrn && <Text style={styles.errorText}>{errors.lrn}</Text>}
          </View>

          <View style={styles.card}>
            <View style={styles.titleRow}>
                <Image source={GradesIcon} style={styles.icons}/>
                <Text style={styles.cardTitle}>Student Information</Text>
            </View>
            <Text style={styles.sectionTitle}>Last Name</Text>
            <TextInput 
              style={[styles.input, errors.lastName && styles.inputError]} 
              placeholder="Last Name *" 
              value={formData.lastName}
              onChangeText={(text) => handleInputChange('lastName', text)}
            />
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
            <Text style={styles.sectionTitle}>Given Name</Text>
            <TextInput 
              style={[styles.input, errors.givenName && styles.inputError]} 
              placeholder="Given Name *" 
              value={formData.givenName}
              onChangeText={(text) => handleInputChange('givenName', text)}
            />
            {errors.givenName && <Text style={styles.errorText}>{errors.givenName}</Text>}
            <Text style={styles.sectionTitle}>Middle Name</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Middle Name" 
              value={formData.middleName}
              onChangeText={(text) => handleInputChange('middleName', text)}
            />
            <Text style={styles.sectionTitle}>Gender</Text>
            <Picker
              style={[styles.input, errors.gender && styles.inputError]}
              selectedValue={formData.gender}
              onValueChange={(value) => handleInputChange('gender', value)}>
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
            <Text style={styles.sectionTitle}>Date of Birth</Text>
            <TextInput 
              style={[styles.input, errors.dateOfBirth && styles.inputError]} 
              placeholder="Date of Birth *" 
              value={formData.dateOfBirth}
              onChangeText={(text) => handleInputChange('dateOfBirth', text)}
            />
            {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
            <Text style={styles.sectionTitle}>Religion</Text>
            <TextInput 
              style={[styles.input, errors.religion && styles.inputError]} 
              placeholder="Religion *" 
              value={formData.religion}
              onChangeText={(text) => handleInputChange('religion', text)}
            />
            {errors.religion && <Text style={styles.errorText}>{errors.religion}</Text>}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Address Information</Text>
            <TextInput 
              style={[styles.input, errors.presentAddress && styles.inputError]} 
              placeholder="Present Address *" 
              value={formData.presentAddress}
              onChangeText={(text) => handleInputChange('presentAddress', text)}
            />
            {errors.presentAddress && <Text style={styles.errorText}>{errors.presentAddress}</Text>}
            <TextInput 
              style={[styles.input, errors.permanentAddress && styles.inputError]} 
              placeholder="Permanent Address *" 
              value={formData.permanentAddress}
              onChangeText={(text) => handleInputChange('permanentAddress', text)}
            />
            {errors.permanentAddress && <Text style={styles.errorText}>{errors.permanentAddress}</Text>}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Medical Information</Text>
            <Text style={styles.sectionTitle}>Does the student have any disabilities or special needs?</Text>
            <Picker
              style={[styles.input, errors.disabilities && styles.inputError]}
              selectedValue={formData.disabilities}
              onValueChange={(value) => handleInputChange('disabilities', value)}>
              <Picker.Item label="No" value="no" />
              <Picker.Item label="Yes" value="yes" />
            </Picker>
            {errors.disabilities && <Text style={styles.errorText}>{errors.disabilities}</Text>}
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Parent/Guardian Information</Text>
            <Text style={styles.cardTitle}>Father's Information</Text>
            <Text style={styles.sectionTitle}>Full Name</Text>
            <TextInput 
              style={[styles.input, errors.fatherName && styles.inputError]} 
              placeholder="Full Name *" 
              value={formData.fatherName}
              onChangeText={(text) => handleInputChange('fatherName', text)}
            />
            {errors.fatherName && <Text style={styles.errorText}>{errors.fatherName}</Text>}
            <Text style={styles.sectionTitle}>Occupation</Text>
            <TextInput 
              style={[styles.input, errors.fatherOccupation && styles.inputError]} 
              placeholder="Occupation *" 
              value={formData.fatherOccupation}
              onChangeText={(text) => handleInputChange('fatherOccupation', text)}
            />
            {errors.fatherOccupation && <Text style={styles.errorText}>{errors.fatherOccupation}</Text>}
            <Text style={styles.sectionTitle}>Contact Number</Text>
            <TextInput 
              style={[styles.input, errors.fatherContact && styles.inputError]} 
              placeholder="Contact Number *" 
              value={formData.fatherContact}
              onChangeText={(text) => handleInputChange('fatherContact', text)}
            />
            {errors.fatherContact && <Text style={styles.errorText}>{errors.fatherContact}</Text>}
            <Text style={styles.sectionTitle}>Email Address</Text>
            <TextInput 
              style={[styles.input, errors.fatherEmail && styles.inputError]} 
              placeholder="Email Address *" 
              value={formData.fatherEmail}
              onChangeText={(text) => handleInputChange('fatherEmail', text)}
            />
            {errors.fatherEmail && <Text style={styles.errorText}>{errors.fatherEmail}</Text>}

            <Text style={styles.cardTitle}>Mother's Information</Text>
            <Text style={styles.sectionTitle}>Full Name</Text>
            <TextInput 
              style={[styles.input, errors.motherName && styles.inputError]} 
              placeholder="Full Name *" 
              value={formData.motherName}
              onChangeText={(text) => handleInputChange('motherName', text)}
            />
            {errors.motherName && <Text style={styles.errorText}>{errors.motherName}</Text>}
            <Text style={styles.sectionTitle}>Occupation</Text>
            <TextInput 
              style={[styles.input, errors.motherOccupation && styles.inputError]} 
              placeholder="Occupation *" 
              value={formData.motherOccupation}
              onChangeText={(text) => handleInputChange('motherOccupation', text)}
            />
            {errors.motherOccupation && <Text style={styles.errorText}>{errors.motherOccupation}</Text>}
            <Text style={styles.sectionTitle}>Contact Number</Text>
            <TextInput 
              style={[styles.input, errors.motherContact && styles.inputError]} 
              placeholder="Contact Number *" 
              value={formData.motherContact}
              onChangeText={(text) => handleInputChange('motherContact', text)}
            />
            {errors.motherContact && <Text style={styles.errorText}>{errors.motherContact}</Text>}
            <Text style={styles.sectionTitle}>Email Address</Text>
            <TextInput 
              style={[styles.input, errors.motherEmail && styles.inputError]} 
              placeholder="Email Address *" 
              value={formData.motherEmail}
              onChangeText={(text) => handleInputChange('motherEmail', text)}
            />
            {errors.motherEmail && <Text style={styles.errorText}>{errors.motherEmail}</Text>}

            <Text style={styles.cardTitle}>Legal Guardian's Information</Text>
            <Text style={styles.sectionTitle}>Full Name</Text>
            <TextInput 
              style={[styles.input, errors.guardianName && styles.inputError]} 
              placeholder="Full Name *" 
              value={formData.guardianName}
              onChangeText={(text) => handleInputChange('guardianName', text)}
            />
            {errors.guardianName && <Text style={styles.errorText}>{errors.guardianName}</Text>}
            <Text style={styles.sectionTitle}>Occupation</Text>
            <TextInput 
              style={[styles.input, errors.guardianOccupation && styles.inputError]} 
              placeholder="Occupation *" 
              value={formData.guardianOccupation}
              onChangeText={(text) => handleInputChange('guardianOccupation', text)}
            />
            {errors.guardianOccupation && <Text style={styles.errorText}>{errors.guardianOccupation}</Text>}
            <Text style={styles.sectionTitle}>Contact Number</Text>
            <TextInput 
              style={[styles.input, errors.guardianContact && styles.inputError]} 
              placeholder="Contact Number *" 
              value={formData.guardianContact}
              onChangeText={(text) => handleInputChange('guardianContact', text)}
            />
            {errors.guardianContact && <Text style={styles.errorText}>{errors.guardianContact}</Text>}
            <Text style={styles.sectionTitle}>Email Address</Text>
            <TextInput 
              style={[styles.input, errors.guardianEmail && styles.inputError]} 
              placeholder="Email Address *" 
              value={formData.guardianEmail}
              onChangeText={(text) => handleInputChange('guardianEmail', text)}
            />
            {errors.guardianEmail && <Text style={styles.errorText}>{errors.guardianEmail}</Text>}
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit Application</Text>
            </Pressable>
            <Pressable 
              style={[styles.clearButton, !hasInput && styles.disabledButton]}
              onPress={handleClearForm}
              disabled={!hasInput}
            >
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 5,
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
  disabledButton: {
    backgroundColor: '#e0e0e0',
    opacity: 0.5,
  },
});

export default StudentApplication;
