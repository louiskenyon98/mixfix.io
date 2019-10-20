export const determineLoggedInState = (req) => {
  return req.get('Cookie').split('=')[1]
};