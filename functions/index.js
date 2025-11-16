const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.lowercaseProductName = functions.firestore
  .document('products/{documentId}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const { documentId } = context.params;

    const lowercaseName = data.name.toLowerCase();

    return snap.ref.set(
      { name_lower: lowercaseName },
      { merge: true }
    );
  });
