const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

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

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})