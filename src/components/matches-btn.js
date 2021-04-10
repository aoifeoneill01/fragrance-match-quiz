const MatchBtn = ({ match, myMatch }) => {
    return(

      <div className={`match-btn ${match ? 'match-show' : 'match-hide' }`}>
        <button onClick={myMatch}>See Matches</button>
      </div>
 )
}

export default MatchBtn