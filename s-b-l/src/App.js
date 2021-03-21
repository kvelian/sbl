import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const getQuestions = 'http://localhost:8000/questions';

const QuestionsSelect = (props) => {
  const [questions, setQuestions] = useState({});
  const [loading, setLoad] = useState(true);

  async function fetchData() {
    const res = await fetch(getQuestions + "/error")
    res
      .json()
      .then(res => {
        setQuestions(res)
        setLoad(false)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <> </>
  }

  const listItems = questions.map((element) => {
      return (
        <option key={element.index} value={element.id}> {element.value} </option>)
  })

  return (
    <select className="App-select" onChange={e => props.setQuestionId(e.target.value)}>
      {listItems}
    </select>
  )
}

const QuestionsSelect2 = (props) => {
  const [questions, setQuestions] = useState({});
  const [loading, setLoad] = useState(true);

  async function fetchData() {
    const res = await fetch(getQuestions)
    res
      .json()
      .then(res => {
        setQuestions(res)
        setLoad(false)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <> </>
  }

  const listItems = questions.map((element) => {
      return (
        <option key={element.index} value={element.id}> {element.value} </option>)
  })

  return (
    <select className="App-select" onChange={e => props.setQuestionId(e.target.value)}>
      {listItems}
    </select>
  )
}

const QuestionsSelect3 = (props) => {
  const [questions, setQuestions] = useState({});
  const [loading, setLoad] = useState(true);

  async function fetchData() {
    const res = await fetch(getQuestions)
    res
      .json()
      .then(res => {
        setQuestions(res)
        setLoad(false)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <> </>
  }

  const listItems = questions.map((element) => {
      return (
        <option key={element.index} value={element.id}> {questions[1].value} </option>)
  })

  return (
    <select className="App-select" onChange={e => props.setQuestionId(e.target.value)}>
      {listItems}
    </select>
  )
}

const AnswerForm = (props) => {
  const [answer, setAnswer] = useState('test');

  async function fetchData(id) {
    const res = await fetch(`http://localhost:8000/answer/${id}`)
    res
      .json()
      .then(res => {
        console.log(res)
        setAnswer(res.data)
      })
  }

  return (
    <div className="App-answer"> 
     <div className="App-label">
      <label>
        {answer}
      </label>
      </div>
      <div className="App-button">
      <input type="submit" value="Спросить" onClick={() => fetchData(props.setectedQuestionId)}/>
      </div>
    </div>
  )
}

const AnswerForm2 = (props) => {
  const [answer, setAnswer] = useState('test');

  async function fetchData(id) {
    const res = await fetch(`http://localhost:8000/answer/1`)
    res
      .json()
      .then(res => {
        console.log(res)
        setAnswer(res.data)
      })
  }

  return (
    <div className="App-answer"> 
     <div className="App-label">
      <label>
        {answer}
      </label>
      </div>
      <div className="App-button">
      <input type="submit" value="Спросить" onClick={() => fetchData(props.setectedQuestionId)}/>
      </div>
    </div>
  )
}



function App() {
  const [setectedQuestionId, setQuestionId] = useState();
  const [setectedQuestionId2, setQuestionId2] = useState();

  return (
    <div className="App">
      <div className="App-block-1" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect setQuestionId={setQuestionId}/>
        </div>
        <AnswerForm setectedQuestionId={setectedQuestionId}/>
      </div>
      <div className="App-block-2" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect2 setQuestionId={setQuestionId2}/>
        </div>
        <AnswerForm2 setectedQuestionId={setectedQuestionId2}/>
      </div>
      <div className="App-block-3" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect3 setQuestionId={setQuestionId2}/>
        </div>
        <AnswerForm setectedQuestionId={setectedQuestionId2}/>
      </div>
    </div>
  );
}

export default App;
