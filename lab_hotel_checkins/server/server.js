import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())


app.listen(9000, function () {
    console.log('App running on port 9000')
})