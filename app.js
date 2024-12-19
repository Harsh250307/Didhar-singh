
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://harshcad07:Abc1234@harsh07.y5e0e.mongodb.net/?retryWrites=true&w=majority&appName=Harsh07', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/tasks', taskRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
