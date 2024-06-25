export type User = {
  displayName: string;
  photoURL?: string;
  uid: string;
  refreshToken?: string;
}

export type UserCredential = (email: string, password: string) => Promise<UserCredential>;