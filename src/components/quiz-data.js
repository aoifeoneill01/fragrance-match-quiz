const Quiz = ({ quiz, currentQuestion, handleClick, showQuiz, options }) => {

  return (
<div className={`quiz ${showQuiz ? 'quiz-start' : '' }`}>

  <div className="questions" id="main-q">
     <p>{ quiz[currentQuestion].question }</p>
  </div>
  <div className={`options ${options ? '' : 'quiz-display'}`}>
      { quiz[currentQuestion].answerOptions.map((answerOption) => (
        <p className="select" onClick={() => handleClick(answerOption)} key={answerOption.value}>{ answerOption.answerText }</p>
      )) }
    </div>

</div>
   )
  }

export default Quiz;
