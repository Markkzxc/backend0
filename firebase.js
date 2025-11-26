// firebase.js
import admin from "firebase-admin";
// Import the service account JSON
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

// Initialize Firebase Admin with the service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Export Firestore instance
export const db = admin.firestore();
