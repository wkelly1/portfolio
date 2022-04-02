// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

import { getRemoteConfig } from "firebase/remote-config";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdcNSAfnhY77VScYoPt-0gRWOFjJNPF_0",

  authDomain: "willkelly-portfolio.firebaseapp.com",

  projectId: "willkelly-portfolio",

  storageBucket: "willkelly-portfolio.appspot.com",

  messagingSenderId: "399277018509",

  appId: "1:399277018509:web:0a2fb0dbfa4de06c8d01c4",

  measurementId: "G-TZ2H4WQPNX",
};

let analytics;

const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firebase

export const useRemoteConfig = () => {
  const remoteConfig = getRemoteConfig(app);

  return remoteConfig;
};
