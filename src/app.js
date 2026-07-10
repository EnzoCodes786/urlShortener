const express = require('express')
const app = express()
const cors = require('cors')
const sendUrlRoutes = require('./routes/sendUrl.routes')
const redirectRoutes = require(`./routes/redirect.routes`)
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
        callback(null, true);
    }
}));

app.use('/api/urls',sendUrlRoutes);
app.use('/api/urls',redirectRoutes);

module.exports = app