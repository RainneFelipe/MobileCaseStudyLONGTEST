import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
// ...existing imports...

const UploadDocuments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.parentCard}>
          <Text style={styles.headerTitle}>Document Upload Center</Text>
          <Text style={styles.headerSubtitle}>
            Please upload all required documents in PDF format or images (JPG, PNG)
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Required Documents</Text>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>PSA Birth Certificate</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>Most Recent Report Card (SF9)</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>Certificate of Good Moral Character</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>Official Transcript of Record</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>GTBA Forms</Text>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>Recommendation Letters (Grades 2-10)</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>
                Parent-School Letter of Understanding and Agreement
              </Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>Standard of Conduct</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Additional Requirements</Text>
            <View style={styles.uploadItem}>
              <Pressable style={styles.fileUploadButton}>
                <Text style={styles.fileUploadIcon}>🖼️</Text>
                <Text style={styles.fileUploadText}>Select file</Text>
              </Pressable>
              <Text style={styles.uploadText}>1x1 ID Picture</Text>
              <Text style={styles.fileStatus}>No file chosen</Text>
            </View>
          </View>

          <Pressable style={styles.submitButton}>
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
});

export default UploadDocuments;
