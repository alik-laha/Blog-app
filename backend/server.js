const app = require('./app')
const dotenv = require('dotenv')
const dbconection = require('./config/database')


dotenv.config({ path: "backend/config/config.env" })
dbconection()

app.listen(process.env.port, () => {
    console.log(`server is runing on port${process.env.port}`)
})
