const express = require('express')
const app = express()
const cors = require('cors')
const sendUrlRoutes = require('./routes/sendUrl.routes')
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
        callback(null, true);
    }
}));

app.use('/api/urls',sendUrlRoutes);

module.exports = app