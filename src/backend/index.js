const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routes/UserAuthRoutes');
const Connectdb=require('./Utils/DB')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

Connectdb()

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send("API is live"));

app.listen(port, () => console.log(`Server running on port ${port}`));
