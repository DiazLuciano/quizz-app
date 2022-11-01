export type ErrorAuthCode =
  'auth/user-not-found' |
  'auth/invalid-password' |
  'auth/too-many-requests' |
  'auth/wrong-password';

export type ErrorAuthDescription =
  'User not found' |
  'Incorrect password' |
  'Too many attemps' |
  'Wrong password';

export const MAP_AUTH_ERRORS: Map<ErrorAuthCode, ErrorAuthDescription> = new Map<ErrorAuthCode, ErrorAuthDescription>([
  ['auth/user-not-found', 'User not found'],
  ['auth/invalid-password','Incorrect password'],
  ['auth/too-many-requests', 'Too many attemps'],
  ['auth/wrong-password', 'Wrong password']
]);
