const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}))


const port = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb' }))



const loginRouter = require('./routes/signin')
const SignupRouter = require('./routes/signup')
const imagesRouter= require('./routes/upload')
const food_fetchRouter = require('./routes/food_consulting')
const deleteRouter = require('./routes/deleteFood')
const updateRouter = require('./routes/update')

app.use('/', loginRouter)
app.use('/', SignupRouter)
app.use('/', imagesRouter)
app.use('/', food_fetchRouter)
app.use('/', deleteRouter)
app.use('/', updateRouter)


app.use('/api/uploads', (req, res, next) => {
  if (req.url.startsWith('/api/uploads')) {
    next();
  } else {
    console.log('Request received:', req.url);
    next();
  }
}, express.static('../images'));


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});