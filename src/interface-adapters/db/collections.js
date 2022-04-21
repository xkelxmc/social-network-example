import firestore from '@react-native-firebase/firestore';

export const userCollection = firestore().collection('Users');

export const postCollection = firestore().collection('Posts');
