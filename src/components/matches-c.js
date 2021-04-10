import resultA from './images/mm.jpg';
import resultB from './images/ntf.jpg';
import resultC from './images/byredo.jpg';

const MatchesC = ({ showMatchC }) => {

  return(
   <div className={`matches ${showMatchC ? 'matches-show' : '' }`}>
     <h1 className="questions result-title"><span className="result-match">Your Matches</span>Fresh &amp; Clean Scents</h1>
     <div className="match-img-container match-c-container">
     <div className={showMatchC ? 'animate-in' : ''}>
       <img src={resultB} alt="Tom Ford Neroli Portofino Acqua perfume"/>
       <h2>Tom Ford Neroli Portofino Acqua</h2>
       <p><b>Top Note</b> Bergamot, Lemon &amp; Petitgrain<br/>
       <b>Heart Note</b> Neroli &amp; Orange Blossom<br/>
       <b>Base Note</b> Amber Wood Alongside White Musk</p>
    </div>
     <div className={showMatchC ? 'animate-in' : ''}>
     <img src={resultA} alt="Maison Margiela perfume"/>
       <h2>Replica Lazy Sunday Morning</h2>
       <p><b>Top Note</b> Pear Accord &amp; Ambrette Seeds<br/>
       <b>Heart Note</b> Iris, Rose Petals &amp; Orange Flower<br/>
       <b>Base Note</b> White Wood &amp; Musk</p>       
   </div>
   <div className={showMatchC ? 'animate-in' : ''}>
       <img src={resultC} alt="Byredo perfume"/>
       <h2>Byredo Blanche Eau de Parfum</h2>
       <p><b>Top Note</b> White Rose, Pink Pepper &amp; Aldehyde<br/>
       <b>Heart Note</b> Violet, Neroli &amp; Peony<br/>
       <b>Base Note</b> Blonde Woods, Sandalwood, Musk</p>
   </div>
   </div>
   </div>

  )
}

export default MatchesC;
