import express from 'express'
import cookieSession from 'cookie-session'

import { AppRouter } from './AppRouter'
import './controllers/LoginController'
import './controllers/RootController'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cookieSession({
    keys: [''],
  })
)

app.use(AppRouter.getInstance())

app.listen(3000, () => console.log('Listenning'))
