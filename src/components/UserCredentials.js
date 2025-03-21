import AsyncStorage from '@react-native-async-storage/async-storage';

const CREDENTIALS_KEY = '@user_credentials';

export const storeCredentials = async (credentials) => {
  try {
    await AsyncStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
    return true;
  } catch (error) {
    console.error('Error storing credentials:', error);
    return false;
  }
};

export const getCredentials = async () => {
  try {
    const credentials = await AsyncStorage.getItem(CREDENTIALS_KEY);
    return credentials ? JSON.parse(credentials) : null;
  } catch (error) {
    console.error('Error retrieving credentials:', error);
    return null;
  }
};
