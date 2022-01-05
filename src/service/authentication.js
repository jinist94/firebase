import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const onLogin = (name) => {
  if (name === "google") {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
};
export const emailLogin = async (email, password) => {
  const auth = getAuth();
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result.user);
  } catch (error) {
    console.log(error.message);
  }
};

export const onLogout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
  }
};
