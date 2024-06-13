const express = require('express');
const bodyParser = require('body-parser');
const gatewayRoutes = require('./routes/gateway');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/', gatewayRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Gateway Service running on port ${PORT}`);
});
