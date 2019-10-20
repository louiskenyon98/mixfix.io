export const determineLoggedInState = (req) => {
  if (req.get('Cookie')) {
    return req.get('Cookie').split('=')[1]
  }
  return false;
};