import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDkKfitAyVClOWYAnF1nohAi03j3rZq83c',
  authDomain: 'optimists-group.firebaseapp.com',
  databaseURL: 'https://optimists-group-default-rtdb.firebaseio.com',
  projectId: 'optimists-group',
  storageBucket: 'optimists-group.appspot.com',
  messagingSenderId: '150897721153',
  appId: '1:150897721153:web:bce9f349bb73574d8c2bc0',
  measurementId: 'G-M182BB8CNH'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const { serverTimestamp } = firebase.firestore.FieldValue;
export const { fromMillis } = firebase.firestore.Timestamp;
export const { increment } = firebase.firestore.FieldValue;

// Storage exports
export const storage = firebase.storage();
export const { STATE_CHANGED } = firebase.storage.TaskEvent;

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0
  };
}
