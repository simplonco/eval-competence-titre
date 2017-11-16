import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import config from './config'
import router from './routes/router'

mongoose.connect(config.mongoUrl)

const app = express()

app.use(cors())
app.use(router)

app.listen(config.port, () => {
    console.log(`App is now listening on port ${config.port}`)
})