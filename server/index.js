require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express(),
    { add, getAll, deleteItem } = require('./controller/controller'),
    { PORT_NUM, CONNECTION_STR } = process.env

    //middleware
    app.use(cors())
    app.use(express.json());

    mongoose.connect(CONNECTION_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
    }, () => console.log('DB is Locked and loaded'))

    app.post('/api/income', add)
    app.get('/api/income', getAll)
    app.delete('/api/income/:id', deleteItem)

    app.listen(PORT_NUM, () => console.log(`Running wild on port ${PORT_NUM}`))