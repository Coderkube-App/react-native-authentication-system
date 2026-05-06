import firestore from '@react-native-firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: any;
}

export const UserService = {
  createUserProfile: (uid: string, profile: Partial<UserProfile>) => {
    return firestore()
      .collection('users')
      .doc(uid)
      .set({
        ...profile,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
  },
  
  getUserProfile: (uid: string) => {
    return firestore().collection('users').doc(uid).get();
  },
  
  updateUserProfile: (uid: string, profile: Partial<UserProfile>) => {
    return firestore().collection('users').doc(uid).update(profile);
  },
};