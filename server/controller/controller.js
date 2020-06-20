const Income = require('../models/income')

module.exports = {

    add: async (req, res) => {
        const { description, category, money } = req.body
        console.log(description, category, money)
        //adding new record
        const income = new Income({ description, category, money })
        //saving it to db
        let savedIncome = await income.save()
        //getting it from db
        savedIncome = await Income.find()
        //sending to client
        res.status(200).json(savedIncome)
    },

    getAll: async (req, res) => {

        const income = await Income.find()
        res.status(200).json(income)
    },

    deleteItem: async (req, res) => {
        const { id } = req.params
        console.log('delete', id)
        let item = await Income.deleteOne({_id: id})
        item = await Income.find()
        res.status(200).json(item)
    }



}