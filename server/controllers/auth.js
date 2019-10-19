

export const postSignup = (req, res) => {
  console.log(req.body);
};

export const getSignup = (req, res) => {
  res.redirect('/signupform')
};