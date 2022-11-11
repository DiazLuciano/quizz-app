export type ErrorAuthCode =
  'auth/user-not-found' |
  'auth/invalid-password' |
  'auth/too-many-requests' |
  'auth/wrong-password' |
  'auth/weak-password';

export type ErrorAuthDescription =
  'User not found' |
  'Incorrect password' |
  'Too many attemps' |
  'Wrong password' |
  'Password should be at least 6 characters';

export const MAP_AUTH_ERRORS: Map<ErrorAuthCode, ErrorAuthDescription> = new Map<ErrorAuthCode, ErrorAuthDescription>([
  ['auth/user-not-found', 'User not found'],
  ['auth/invalid-password','Incorrect password'],
  ['auth/too-many-requests', 'Too many attemps'],
  ['auth/wrong-password', 'Wrong password'],
  ['auth/weak-password', 'Password should be at least 6 characters']
]);
