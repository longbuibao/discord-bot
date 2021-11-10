import { Router, Request, Response } from 'express'

interface RequestBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()

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

  if (email) {
    res.send(email)
  } else {
    res.send('You must provide an email')
  }
})

export { router }
