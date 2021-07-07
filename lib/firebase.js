import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA8c05DThwV1FBYbTV74e94jomfYhZBsSY',
  authDomain: 'nextfire-d815d.firebaseapp.com',
  projectId: 'nextfire-d815d',
  storageBucket: 'nextfire-d815d.appspot.com',
  messagingSenderId: '170774629417',
  appId: '1:170774629417:web:3db4259a8f43be7ac16038',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
