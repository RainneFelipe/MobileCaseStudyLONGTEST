import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6fb1fc',
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4364f7',
    borderRadius: 4,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    marginTop: 15,
    color: '#555',
  },
  signUpLink: {
    color: '#4364f7',
  },
  dashboardContainer: {
    padding: 20,
    alignItems: 'center',
  },
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4364f7',
  },
  dashboardLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'left',
  },
  dashboardSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  announcementContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  announcementItem: {
    marginBottom: 15,
  },
  announcementText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementDetail: {
    fontSize: 14,
    color: '#555',
  },
  dashboardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dashboardCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  dashboardCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4364f7',
    marginBottom: 10,
  },
  dashboardCardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});