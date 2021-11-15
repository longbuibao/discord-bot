import express from 'express'
import { router } from './routes/loginRoutes'
import cookieSession from 'cookie-session'

import './controllers/LoginController'
import { router as controllerRouter } from './controllers/decorators/controller'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cookieSession({
    keys: [''],
  })
)

app.use(router)
app.use(controllerRouter)

app.listen(3000, () => console.log('Listenning'))
