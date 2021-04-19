import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const getQuestions = 'http://localhost:8000/questions';

const QuestionsSelect = (props) => {
  const [questions, setQuestions] = useState({});
  const [loading, setLoad] = useState(true);

  async function fetchData() {
    const res = await fetch(getQuestions)
    res
      .json()
      .then(res => {
        setQuestions(res)
        props.setQuestionId(res[0].id)
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
        props.setQuestionId(res[0].id)
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
        props.setQuestionId(res[0].id)
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
      <input type="submit" value="Спросить" onClick={() => fetchData(props.selectedQuestionId)}/>
      </div>
    </div>
  )
}

const AnswerForm2 = (props) => {
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
      <input type="submit" value="Спросить" onClick={() => fetchData(props.selectedQuestionId)}/>
      </div>
    </div>
  )
}

const AnswerForm3 = (props) => {
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
      <input type="submit" value="Спросить" onClick={() => fetchData(props.selectedQuestionId)}/>
      </div>
    </div>
  )
}



function App() {
  const [selectedQuestionId, setQuestionId] = useState();
  const [selectedQuestionId2, setQuestionId2] = useState();
  const [selectedQuestionId3, setQuestionId3] = useState();

  return (
    <div className="App">
      <div className="App-block-1" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect setQuestionId={setQuestionId}/>
        </div>
        <AnswerForm selectedQuestionId={selectedQuestionId}/>
      </div>
      <div className="App-block-2" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect2 setQuestionId={setQuestionId2}/>
        </div>
        <AnswerForm2 selectedQuestionId={selectedQuestionId2}/>
      </div>
      <div className="App-block-3" style={{marginTop: 50}}>
        <div className="App-select">
          <QuestionsSelect3 setQuestionId={setQuestionId3}/>
        </div>
        <AnswerForm3 selectedQuestionId={selectedQuestionId3}/>
      </div>
    </div>
  );
}

export default App;
