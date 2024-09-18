const express = require('express');
const db = require('./models'); // Import the models/index.js

const app = express();

app.use(express.json());

// Sync models with the database
db.sequelize.sync().then(() => {
  console.log('Database connected and models synced');
});

// Define some routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize app');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
