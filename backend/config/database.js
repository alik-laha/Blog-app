const mongoose = require('mongoose');


const cunectdb = () => {
    mongoose.connect(process.env.db_location).then((data) => {
        console.log(`mongoDB conected with ${data.Connection.name}`)
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = cunectdb