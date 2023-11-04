// index.js
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user-routes');
const { sequelize } = require('./models');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', 'views');

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use user routes
app.use('/users', userRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

sequelize.sync().then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
