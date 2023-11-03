const express = require('express');
const { sequelize } = require('./utils/database'); // Adjust the path to the database.js file as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Test the User model
const User = require('./models/user'); // Adjust the path to the user.js model file as needed

// Create a new user
async function createUser() {
  try {
    const newUser = await User.create({
      firstName: 'Rameen',
      lastName: 'Hamid',
      email: 'rameenhamid@dubizzlelabs.com',
      password: '123'
    });
    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Test the User model
(async () => {
  await createUser();
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
