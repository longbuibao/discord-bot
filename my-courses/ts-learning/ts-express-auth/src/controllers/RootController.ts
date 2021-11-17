import { NextFunction, Request, Response } from 'express'
import { get, controller, use } from './decorators'

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }
  res.status(403).send(`
		<h1>You are not log in</h1>
		<a href="/login">Log in</a>
	`)
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
				<h1>You are logged in</h1>
				<a href="/auth/logout">Log out</a>
			`)
    } else
      res.send(`
				<h1>You are not log in</h1>
				<a href="/auth/login">Log in</a>
		`)
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
		<h1>SUPER SECRET HERE</h1>
	`)
  }
}
