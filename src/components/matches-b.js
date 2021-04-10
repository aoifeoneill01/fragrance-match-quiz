import resultA from './images/heretic-1.jpg';
import resultB from './images/santal.jpg';
import resultC from './images/bt.jpg';

const MatchesB = ({ showMatchB }) => {

  return(
   <div className={`matches ${showMatchB ? 'matches-show' : '' }`}>
     <h1 className="questions result-title"><span className="result-match">Your Matches</span>Woody &amp; Musk Scents</h1>
     <div className="match-img-container">
     <div className={showMatchB ? 'animate-in' : ''}>
       <img id="img-b-1" src={resultA} alt="Heretic perfume"/>
       <h2>Heretic Parfum Smudge</h2>
       <p><b>Top Note</b> Atlantic Cedar, Frankincense<br/>
       <b>Heart Note</b> Clary Sage &amp; Juniper<br/>
       <b>Base Note</b> Canadian Balsam &amp; Sandalwood</p>
    </div>
     <div className={showMatchB ? 'animate-in' : ''}>
       <img id="img-b-2" src={resultB} alt="Le Labo perfume"/>
       <h2>Santal 33 Eau de Parfum</h2>
       <p><b>Top Note</b> violet Accord, Cardamom<br/>
       <b>Heart Note</b> Iris &amp; Ambrox<br/>
       <b>Base Note</b> Cedarwood, Leather &amp; Sandalwood</p>
   </div>
   <div className={showMatchB ? 'animate-in' : ''}>
       <img id="img-b-3" src={resultC} alt="Bottega Venetta perfume"/>
       <h2>Bottega Veneta Illusione</h2>
       <p><b>Top Note</b> Bergamot &amp; Blackcurrant<br/>
       <b>Heart Note</b> Orange Blossom &amp; Green Fig<br/>
       <b>Base Note</b> Olive Wood &amp; Tonka Bean</p>
   </div>
   </div>
   </div>

  )
}

export default MatchesB;
