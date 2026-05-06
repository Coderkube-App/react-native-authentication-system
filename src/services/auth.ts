import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appleAuth } from '@invertase/react-native-apple-authentication';

// Configure Google Sign-In with the webClientId from Firebase config
GoogleSignin.configure({
  webClientId: '1049161737791-webclientidplaceholder.apps.googleusercontent.com', // Replace with actual from google-services.json if available
});

export const AuthService = {
  login: (email: string, pass: string) => {
    return auth().signInWithEmailAndPassword(email, pass);
  },
  
  register: (email: string, pass: string) => {
    return auth().createUserWithEmailAndPassword(email, pass);
  },

  logout: () => {
    return auth().signOut();
  },

  onAuthStateChanged: (callback: any) => {
    return auth().onAuthStateChanged(callback);
  },

  signInWithGoogle: async () => {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  },

  signInWithApple: async () => {
    try {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      // Ensure Apple verify the user's identity
      const { identityToken, nonce } = appleAuthRequestResponse;

      if (!identityToken) {
        throw new Error('Apple Sign-In failed - no identity token returned');
      }

      // Create an Apple credential with the token
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

      // Sign-in the user with the credential
      return auth().signInWithCredential(appleCredential);
    } catch (error) {
      console.error('Apple Sign-In Error:', error);
      throw error;
    }
  },

  // GitHub is currently a placeholder in the UI as per latest logs
  signInWithGithub: async () => {
    console.warn('GitHub Sign-In is not yet implemented');
    throw new Error('GitHub Sign-In is not yet implemented');
  }
};