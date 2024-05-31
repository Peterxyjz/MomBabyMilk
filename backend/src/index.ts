import express from 'express' //khai báo server express (để localhost ==> khác với việt tự đọc file trên máy)
const app = express() //cú khái tạo server express
import usersRouter from './routes/users.routes'
const port = 4000 //port là port đó
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import cors from 'cors'
databaseService.connect()
const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000']

app.use(cors({ origin: true }))

app.use(express.json()) //app handler: để app đọc JSON (cấu hình cho server khi nhận json thì sẽ tự parse bằng cách vào file index.ts thêm dòng này)
app.get('/', (req, res) => {
  //mở browser: http://localhost:4000/ (tạo 1 cái api test để xem cái routing '/' của mình có hoạt động không)
  res.send('hello world')
})

//api: http://localhost:4000/users/login
//dùng trên postman
app.use('/users', usersRouter) //route handler

//seach


app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Project MomBabyMilk này đang chạy trên post ${port}`)
})
