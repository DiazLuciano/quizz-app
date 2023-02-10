export type ErrorAuthCode =
  'auth/user-not-found' |
  'auth/invalid-password' |
  'auth/too-many-requests' |
  'auth/wrong-password' |
  'auth/weak-password' |
  'auth/email-already-in-use';

export type ErrorAuthDescription =
  'User not found' |
  'Incorrect password' |
  'Too many attemps, please go to Recover Password' |
  'Wrong password' |
  'Password should be at least 6 characters' |
  'User already exists';

export const MAP_AUTH_ERRORS: Map<ErrorAuthCode, ErrorAuthDescription> = new Map<ErrorAuthCode, ErrorAuthDescription>([
  ['auth/user-not-found', 'User not found'],
  ['auth/invalid-password','Incorrect password'],
  ['auth/too-many-requests', 'Too many attemps, please go to Recover Password'],
  ['auth/wrong-password', 'Wrong password'],
  ['auth/weak-password', 'Password should be at least 6 characters'],
  ['auth/email-already-in-use', 'User already exists']
]);
