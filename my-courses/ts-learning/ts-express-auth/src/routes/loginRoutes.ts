import { Router, Request, Response } from 'express'
import { type } from 'os'

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

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body
})

export { router }
