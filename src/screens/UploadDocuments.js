import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// ...existing imports...

const UploadDocuments = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-250)).current;
  const overlayAnimation = useRef(new Animated.Value(0)).current;
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [validationErrors, setValidationErrors] = useState([]);

  const handleFileUpload = async (documentType) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      setUploadedFiles(prev => ({
        ...prev,
        [documentType]: result[0]
      }));
      // Remove validation error when file is uploaded
      setValidationErrors(prev => prev.filter(error => error !== documentType));
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error('Error picking document:', err);
      }
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const getUploadButtonContent = (documentType) => {
    const file = uploadedFiles[documentType];
    if (file) {
      return (
        <>
          <Text style={styles.fileUploadIcon}>📄</Text>
          <Text style={[styles.fileUploadText, styles.uploadedFileName]} numberOfLines={1}>
            {file.name}
          </Text>
          <Text style={styles.fileSize}>{formatFileSize(file.size)}</Text>
        </>
      );
    }
    return (
      <>
        <Text style={styles.fileUploadIcon}>🖼️</Text>
        <Text style={styles.fileUploadText}>Select file</Text>
      </>
    );
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

  const handleSubmit = () => {
    const requiredDocuments = [
      'birthCertificate',
      'reportCard',
      'goodMoral',
      'transcript',
      'recommendationLetters',
      'parentSchoolLetter',
      'conduct',
      'idPicture'
    ];

    const missingDocuments = requiredDocuments.filter(
      docType => !uploadedFiles[docType]
    );

    setValidationErrors(missingDocuments);

    if (missingDocuments.length === 0) {
      // Proceed with submission
      console.log('All documents uploaded');
    }
  };

  const isFieldInvalid = (documentType) => {
    return validationErrors.includes(documentType);
  };

  const getFileStatus = (documentType) => {
    if (isFieldInvalid(documentType)) {
      return <Text style={styles.errorText}>Please select a file</Text>;
    }
    return (
      <Text style={styles.fileStatus}>
        {uploadedFiles[documentType] ? uploadedFiles[documentType].name : 'No file chosen'}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        sidebarAnimation={sidebarAnimation}
        overlayAnimation={overlayAnimation}
        isSidebarActive={isSidebarActive}
        closeSidebar={toggleSidebar}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.parentCard}>
          <Text style={styles.headerTitle}>Document Upload Center</Text>
          <Text style={styles.headerSubtitle}>
            Please upload all required documents in PDF format or images (JPG, PNG)
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Required Documents</Text>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.birthCertificate && styles.fileUploadButtonActive,
                  isFieldInvalid('birthCertificate') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('birthCertificate')}
              >
                {getUploadButtonContent('birthCertificate')}
              </Pressable>
              <Text style={styles.uploadText}>PSA Birth Certificate</Text>
              {getFileStatus('birthCertificate')}
            </View>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.reportCard && styles.fileUploadButtonActive,
                  isFieldInvalid('reportCard') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('reportCard')}
              >
                {getUploadButtonContent('reportCard')}
              </Pressable>
              <Text style={styles.uploadText}>Most Recent Report Card (SF9)</Text>
              {getFileStatus('reportCard')}
            </View>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.goodMoral && styles.fileUploadButtonActive,
                  isFieldInvalid('goodMoral') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('goodMoral')}
              >
                {getUploadButtonContent('goodMoral')}
              </Pressable>
              <Text style={styles.uploadText}>Certificate of Good Moral Character</Text>
              {getFileStatus('goodMoral')}
            </View>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.transcript && styles.fileUploadButtonActive,
                  isFieldInvalid('transcript') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('transcript')}
              >
                {getUploadButtonContent('transcript')}
              </Pressable>
              <Text style={styles.uploadText}>Official Transcript of Record</Text>
              {getFileStatus('transcript')}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>GTBA Forms</Text>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.recommendationLetters && styles.fileUploadButtonActive,
                  isFieldInvalid('recommendationLetters') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('recommendationLetters')}
              >
                {getUploadButtonContent('recommendationLetters')}
              </Pressable>
              <Text style={styles.uploadText}>Recommendation Letters (Grades 2-10)</Text>
              {getFileStatus('recommendationLetters')}
            </View>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.parentSchoolLetter && styles.fileUploadButtonActive,
                  isFieldInvalid('parentSchoolLetter') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('parentSchoolLetter')}
              >
                {getUploadButtonContent('parentSchoolLetter')}
              </Pressable>
              <Text style={styles.uploadText}>
                Parent-School Letter of Understanding and Agreement
              </Text>
              {getFileStatus('parentSchoolLetter')}
            </View>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.conduct && styles.fileUploadButtonActive,
                  isFieldInvalid('conduct') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('conduct')}
              >
                {getUploadButtonContent('conduct')}
              </Pressable>
              <Text style={styles.uploadText}>Standard of Conduct</Text>
              {getFileStatus('conduct')}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Additional Requirements</Text>
            <View style={styles.uploadItem}>
              <Pressable 
                style={[
                  styles.fileUploadButton,
                  uploadedFiles.idPicture && styles.fileUploadButtonActive,
                  isFieldInvalid('idPicture') && styles.fileUploadButtonError
                ]}
                onPress={() => handleFileUpload('idPicture')}
              >
                {getUploadButtonContent('idPicture')}
              </Pressable>
              <Text style={styles.uploadText}>1x1 ID Picture</Text>
              {getFileStatus('idPicture')}
            </View>
          </View>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit All Documents</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContent: {
    padding: 20,
  },
  parentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  uploadItem: {
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#4a90e2',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  uploadIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fileStatus: {
    fontSize: 12,
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fileUploadButton: {
    borderWidth: 1,
    borderColor: '#4a90e2',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  fileUploadIcon: {
    fontSize: 24,
    color: '#4a90e2',
    marginBottom: 5,
  },
  fileUploadText: {
    fontSize: 14,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  fileUploadButtonActive: {
    backgroundColor: '#e6f0fa',
  },
  uploadedFileName: {
    fontSize: 12,
    maxWidth: '90%',
  },
  fileSize: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  fileUploadButtonError: {
    borderColor: '#ff4444',
    borderWidth: 2,
  },
  errorText: {
    fontSize: 12,
    color: '#ff4444',
    fontWeight: '500'
  },
});

export default UploadDocuments;
