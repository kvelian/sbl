const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const questions = require('./static/questions.json')
const answers = require('./static/answers.json')

const host = 'localhost'
const port = 8000


const answersList = function (answerId) {
    const value = answers.find(x => x.id === answerId).value;
    return value;
};

app.get('/questions/error', (req, res) => {
  res.status(404)
  res.json(questions);
})


app.get('/questions', (req, res) => {
      res.json(questions);
})

app.get('/answer/:id', (req,res) => {
      const data = answersList(req.params.id)
      res.json({data});
})

app.get('/subjects', (req,res) => {
  const {day} = req.query

  if (!day) {
    res.status(400)
    res.json({message:"Missing queryParam day"})
  }

  res.json({message:"Ty davno uge ne v shkole, yoba"})
})

app.post('/fresh', (req,res) => {
  const {apple, juicer} = req.body

  if (!juicer) {
    res.status(400)
    res.json({message:"Missing juicer for fresh"})
  }
  if (!apple) {
    res.status(204)
    res.send()
  }

  res.json({message:"Na sock"})
})

app.get('/gayclub', (req,res) => {
  if (req.header('gay-password') != "dzo") {
    res.status(401)
    res.json({message:"You are not in the club, buddy"})
  }

  res.json({message:"Welcome to the club, buddy"})
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})