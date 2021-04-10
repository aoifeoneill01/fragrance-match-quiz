const Start = ({ beginQuiz, start }) => {
  return(
   <div className={`starting ${start ? '' : 'starting-change'}`} >
     <p><span>Fragrance</span> For You</p>
     <p className="questions">Try our quiz to find your perfect fragrance match</p>
     <button onClick={beginQuiz}>Find My Match</button>
   </div>

  )
}

export default Start;
