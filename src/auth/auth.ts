import type { User } from "./types/auth";

const currentUser = {
  displayName: '',
  photoURL: '',
  uid: '',
  refreshToken: '',
}

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  const { user } = auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const createUserWithEmailAndPassword = async (email: string, password: string) => {
  const { user } = auth.createUserWithEmailAndPassword(email, password);
  return user;
};

export const signOut = async () => {
  auth.signOut();
};

export const signInAnonymously = async () => {
  return await auth
    .signInAnonymously()
    .then((value: unknown) => {
      const { user }: { user: User } = value as { user: User };
      return user;
    })
    .catch((error: any) => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
        return false;
      }
      console.error(error);
      throw error;
    });
};

const auth = {
  signInWithEmailAndPassword: (email: string, password: string) => {
    if (email && password) {
      return { user: currentUser }
    }
    return { user: undefined, code: 'auth/invalid-email' }
  },
  createUserWithEmailAndPassword: (email: string, password: string) => {
    if (email && password) {
      return { user: currentUser }
    }
    return { user: undefined, code: 'auth/invalid-email' }
  },
  signOut: () => { },
  onAuthStateChanged: (_?: unknown) => currentUser,
  sendPasswordResetEmail: () => { },
  confirmPasswordReset: () => { },
  updatePassword: () => { },
  updateEmail: () => { },
  signInAnonymously: () => {
      return Promise.resolve({ user: currentUser });
    },
}

export default auth;