import { Request, Response } from 'express'
export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'huyq09@gmail.com' && password === '123321') {
    return res.json({
      data: [
        { fname: 'Huy', yob: 2003 },
        { fname: 'Phong', yob: 2003 },
        { fname: 'Thịnh', yob: 2004 },
        { fname: 'Hậu', yob: 2004 }
      ]
    })
  } else {
    return res.status(400).json({
      error: 'login failed'
    })
  }
}
