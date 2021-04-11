import { useState } from 'react';
import Quiz from './components/quiz-data';
import Start from './components/start';
import Bg from './components/background';
import WhiteBg from './components/white-bg'
import BgImages from './components/bg-images';
import MatchBtn from './components/matches-btn';
import MatchesA from './components/matches-a';
import MatchesB from './components/matches-b';
import MatchesC from './components/matches-c';



var results = [];

function App() {

const quiz = 
  [
    {
      id: 1,
      question: "You would describe your favourite scent as",
      answerOptions: [
        { answerText: "Sweet and floral", value: "a"},
        { answerText: "Warm and earthy", value: "b"},
        { answerText: "Fresh like sea air", value: "c"}
      ]
    },
    
    {
      id: 2,
      question: "Choose one of these scents you are most drawn to",
      answerOptions: [
        { answerText: "Rose", value: "a"},
        { answerText: "Violet", value: "b"},
        { answerText: "Neroli", value: "c"}
      ]
    },
    
    {
      id: 3,
      question: "Choose one of these scents you are most drawn to",
      answerOptions: [
        { answerText: "Orange Blossom", value: "a"},
        { answerText: "Musk", value: "b"},
        { answerText: "Iris", value: "c"}
      ]
    },

    {
      id: 4,
      question: "Choose one of these scents you are most drawn to",
      answerOptions: [
        { answerText: "Jasmine", value: "a"},
        { answerText: "Cedarwood", value: "b"},
        { answerText: "Bergamot", value: "c"}
      ]
    },

    {
      id: 5,
      question: "",
      answerOptions: [
        { answerText: "", value: "a"},
        { answerText: "", value: "b"},
        { answerText: "", value: "c"}
      ]
    }
    ]


  const [showQuiz, setShowQuiz] = useState(false);
  const [start, setStart] = useState(true);
  const [wBackground, setWbackground] = useState(true);
  const [bgImages, setBgImages] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState(true);
  const [match, setMatch] = useState(false);
  const [showMatchA, setShowMatchA] = useState(false);
  const [showMatchB, setShowMatchB] = useState(false);
  const [showMatchC, setShowMatchC] = useState(false);
  const [matchesBackground, setMatchesBackground] = useState(false);


 // Next question on click
  const handleClick = (answerOption) => {

    results.push(answerOption.value);
    console.log(results);

  setTimeout(() => {
     const nextQuestion = currentQuestion + 1;
     setCurrentQuestion(nextQuestion);

     if(currentQuestion === 3){
       setOptions(false);
       setMatch(true);
     }
   }, 900);

 // Scroll quiz items
    var item = document.querySelector(".App");
    item.style.animation = "none";
    setTimeout(() => {
        item.style.animation = "scroll 1.5s ease-in forwards";
    }, 1.5);
  }

 // Begin Quiz Event   
    const beginQuiz = () => {

    setStart(false);
    setShowQuiz(true);
    setWbackground(false);
    setBgImages(false);
  }
  
   // Show Results
 const myMatch = () => {

  var a = [];
  var b = [];
  var c = [];

  results.forEach((values) => {
    if(values === 'a'){
     return a.push(values);
    } 
    else if(values === 'b'){
     return b.push(values);
    }
    else if(values === 'c'){
      return c.push(values);
    }
  });

  console.log(a.length);
  console.log(b.length);
  console.log(c.length);

  if(a.length >= 2){
    setShowMatchA(true);
  }
  else if(b.length >= 2){
    setShowMatchB(true);
  }
  else if(c.length >= 2){
    setShowMatchC(true);
  }
 
    setMatch(false);
    setWbackground(true);
    setMatchesBackground(true);
 }


  return (
    <div className="bg-container">
      <Bg />
      <WhiteBg wBackground={wBackground} matchesBackground={matchesBackground} />
      <BgImages bgImages={bgImages} />

     <div className="App">
       <Start beginQuiz={beginQuiz} start={start} />
       <Quiz quiz={quiz} currentQuestion={currentQuestion} handleClick={handleClick} showQuiz={showQuiz} options={options} />
       <MatchBtn match={match} myMatch={myMatch} />
     </div>
     <MatchesA showMatchA={showMatchA}/>
     <MatchesB showMatchB={showMatchB} />
     <MatchesC showMatchC={showMatchC} />
   </div>
  );
}


export default App;
