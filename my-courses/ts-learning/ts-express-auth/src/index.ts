import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'

const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(3000, () => console.log('Listenning'))
