import { Router, Request, Response, NextFunction } from 'express'

interface RequestBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()

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

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
	 	<h1>You are logged in</h1>
		<a href="/logout">Log out</a>
	 `)
  } else
    res.send(`
  		<h1>You are not log in</h1>
		<a href="/login">Log in</a>
  `)
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
		<h1>SUPER SECRET HERE</h1>
	`)
})

router.get('/login', (req: Request, res: Response) => {
  res.send(`
		<form method="POST">
			<div>
				<label>Email</lable>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button type="submit">Submit</button>
		</form>
	`)
})

router.post('/login', (req: RequestBody, res: Response) => {
  const { email, password } = req.body

  if (email && password && email === 'test@gmail.com' && password === '123') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else res.send('Invalid email or password')
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

export { router }
