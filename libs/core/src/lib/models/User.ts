export interface User {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  twitterScreenName?: string | null;
  userId?: string;
  photoUrl?: string;
  phoneNumber?: string;
}

// export type signUpAppUser = Partial<User>;
// export type fullAppUser = Required<User>;
