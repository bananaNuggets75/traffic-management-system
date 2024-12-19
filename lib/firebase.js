import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCTBICp4ak_WcQd_sy6uXIz4WfEXcPHD-E",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "safe-drive-7c4ad.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://safe-drive-7c4ad-default-rtdb.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "safe-drive-7c4ad",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "safe-drive-7c4ad.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "573526333249",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:573526333249:web:f3db1a778c57fcc8eaf3c0",
};

let firebaseApp = null;
let database = null;

if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
  database = getDatabase(firebaseApp); 
}

export { database };
