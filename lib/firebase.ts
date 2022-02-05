import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDxpudWEhSnaC9h7sZ2lZCPeG4kmcxOobc',
  authDomain: 'ecommerce-8dd8f.firebaseapp.com',
  projectId: 'ecommerce-8dd8f',
  storageBucket: 'ecommerce-8dd8f.appspot.com',
  messagingSenderId: '184306001710',
  appId: '1:184306001710:web:2d424c8e0c34acddcf3cbf',
  measurementId: 'G-3DNX77SGJP',
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };
