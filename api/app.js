const express = require('express')
const cors = require('cors')
const sequelize = require('./db')

const exampleRouter = require('./routes/exampleRouter')

const app = express()

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established')
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`)
  })

/* This allows all CORS */
app.use(cors())

const PORT = process.env.PORT || 4000

/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log('Test route')
  res.status(200).send('Hello from the API')
})

/* Routes */
app.use('/api/examples/', exampleRouter)

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
