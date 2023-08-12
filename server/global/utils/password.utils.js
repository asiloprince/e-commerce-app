const bcrypt = require("bcrypt");

const matchPassword = async function (enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = matchPassword;
