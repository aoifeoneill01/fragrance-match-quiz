import resultA from './images/a.png';
import resultB from './images/tf.jpg';
import resultC from './images/jm.jpg';

const MatchesA = ({ showMatchA }) => {

  return(
   <div className={`matches ${showMatchA ? 'matches-show' : '' }`}>
     <h1 className="questions result-title"><span className="result-match">Your Matches</span>Sweet &amp; Floral Scents</h1>
     <div className="match-img-container">
     <div className={showMatchA ? 'animate-in' : ''}>
       <img src={resultA} alt="Coco Chanel perfume"/>
       <h2>Coco Mademoiselle</h2>
       <p><b>Top Note</b> Vibrant Orange <br/>
       <b>Heart Note</b> Jasmine &amp; Rose<br/>
       <b>Base Note</b> Patchouli &amp; Vetiver</p>
    </div>
     <div className={showMatchA ? 'animate-in' : ''}>
       <img src={resultC} alt="Jo Malone perfume"/>
       <h2>Jo Malone Yellow Hibiscus</h2>
       <p><b>Top Note</b> Yellow Hibiscus<br/>
       <b>Heart Note</b> Rose<br/>
       <b>Base Note</b> White Musk</p>
   </div>
   <div className={showMatchA ? 'animate-in' : ''}> 
       <img src={resultB} alt="Tom Ford perfume"/>
       <h2>Tom Ford Rose Prick</h2>
       <p><b>Top Note</b> Sichuan Pepper &amp; Turmeric<br/>
       <b>Heart Note</b> Rose<br/>
       <b>Base Note</b> Patchouli &amp; Tonka Bean</p>
   </div>
   </div>
   </div>

  )
}

export default MatchesA;
