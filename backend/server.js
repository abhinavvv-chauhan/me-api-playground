const connectDB = require('./config/db');
connectDB();

const userRoutes = require('./routes/userRoutes');

require('dotenv').config();
console.log("Mongo URI is:", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; 

app.use(cors()); 
app.use(express.json()); 


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

app.get('/', (req, res) => {
  res.send('Me-API Backend is running');
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

