import imageOne from './images/1.png';
import imageTwo from './images/2.png';
import imageThree from './images/6.png';
import imageFour from './images/3.png';

const BgImages = ({ bgImages }) => {
  return(
   <div className={`images-container ${bgImages ? '' : 'starting-change' }`}>
    <img id="img-one" src={imageOne} alt="perfume"/>
    <img id="img-two" src={imageTwo} alt="perfume"/>
    <img id="img-three" src={imageThree} alt="perfume"/>
    <img id="img-four" src={imageFour} alt="perfume"/>
  </div>
  )
}

export default BgImages;
