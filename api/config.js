import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env'

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth;
export const firestore = firebase.firestore;