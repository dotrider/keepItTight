const mongoose = require('mongoose');


const incomeSchema = mongoose.Schema({
    description: String,
    category: String,
    money: Number,
    date: {type:Date, default: Date.now}
})

module.exports = mongoose.model('Income', incomeSchema)