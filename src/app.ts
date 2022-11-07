import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './Routes'
import { AppDataSource } from './data-source'

const app = express()
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')
app.use('/', routes)

export default app
