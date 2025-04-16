const { Users } = require('../../../models');
const { passwordMatched } = require('../../../utils/password');

async function userLogin(email, password) {
  const user = await Users.findOne({ email });

  if (!user) {
    return null;
  }
  const isPasswordMatch = passwordMatched(password, user.password);

  if (!isPasswordMatch) {
    return null;
  }

  return user;
}

module.exports = { userLogin };
