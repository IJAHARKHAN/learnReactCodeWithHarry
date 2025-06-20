// https://www.youtube.com/watch?v=jWIeK3ueOm8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=43
// npx nodemon index.js  to start
// npm start  to start
const connectToMongo = require('./db')
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Moon!')
// })

// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello signup!')
// })

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


