import firestore from '@react-native-firebase/firestore';
import firebaseAuth from '@react-native-firebase/auth';

export const db = firestore();

export const auth = firebaseAuth();
