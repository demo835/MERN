// const mongoose = require('./connection.js')

// const ConditionsSchema = new mongoose.Schema({
//   condition: String,
// })

// mongoose.model("ConditionsSchema", ConditionsSchema)

// module.exports = mongoose

// const mongoose = require('./connection.js')

// const ConditionsSchema = new mongoose.Schema({
//   condition: String,
// })

// mongoose.model("Conditions", ConditionsSchema)

// module.exports = mongoose

const mongoose = require('./connection.js')

const ConditionsSchema = new mongoose.Schema({
    condition: String
//   text: String,
//   audioSource: String
})

mongoose.model("Conditions", ConditionsSchema)

module.exports = mongoose