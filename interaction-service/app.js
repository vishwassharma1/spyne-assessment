const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const interactionRoutes = require('./routes/interactionRoutes');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api/interactions', interactionRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
