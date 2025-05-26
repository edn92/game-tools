import ImageCard from './ImageCard';
import hsr_splash from '../assets/hsr/hsr_splash.webp';
import mh_splash from '../assets/mh/mh_splash.png';

function HomePage(){
    //<ImageCard imageSrc={hsr_splash} imageAlt='hsr_card' labelText='HSR Calculators'/>
      //  <ImageCard imageSrc={mh_splash} imageAlt='mh_card' labelText='MH:Wilds Calculators'/> 
    return(
      <div className='homepage-container'>
        <ImageCard backgroundImage={hsr_splash} labelText='HSR Calculators' link='/HSRActionValueCalc'/>
        <ImageCard backgroundImage={mh_splash} labelText='MH:Wilds Calculators' link='/MHMotionValueCalc'/> 
      </div>  
    );
}

export default HomePage;
