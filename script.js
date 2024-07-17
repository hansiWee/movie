const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
