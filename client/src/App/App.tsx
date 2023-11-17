
import './App.css';
import Menu from './components/menu/Menu';
import StartScreenOne from './components/startScreenOne/StartScreenOne';
import SliderOne from './components/slider/SliderOne';
import OurClients from './components/ourClients/OurClients';
import Design from './components/design/Design';
import Testimotional from './components/testimotional/Testimotional';
import Vision from './components/vision/Vision';
import Faq from './components/faq/Faq';
import ReadyStart from './components/readyStart/ReadyStart';
import Footer from './components/footer/Footer';
import Innovative from './components/innovative/Innovative';
import Development from './components/development/Development';
import Technologies from './components/technologies/Technologies';
import Scope from './components/scope/Scope';
import Appdev from './components/appDev/Appdev';
import Slider from './components/slider/Slider';
import SliderTwoVorlage from './components/slider/SliderTwoVorlage';
import SliderThreeVorlage from './components/slider/SliderThreeVorlage';
import Form from './components/form/Form';
import StartScreenThree from './components/startScreenThree/StartScreenThree';
import Detection from './components/detection/Detection';
import Analyze from './components/analyze/Analyze';
import Standard from './components/standard/Standard';
import OurPartners from './components/ourPartners/OurPartners';
import Ai from './components/ai/Ai';
import Reach from './components/reach/Reach';
import StartScreenFour from './components/startScrenFour/startScreenFour';
import Cost from './components/cost/Cost';
import Business from './components/business/Business';
import TwoBild from './components/twoBild/TwoBild';

import { sliderBildArray, sliderFirstTextArray, sliderSecondTextArray, sliderThirdTextArray } from './components/slider/sliderData';

const App = () => {
  return (
    <>
      {/* <Menu />
      <StartScreenOne /> */}
      {/* <SliderThreeVorlage />
      <Slider 
      image01={sliderBildArray[6]} firstText01={sliderFirstTextArray[0]} secondText01={sliderSecondTextArray[6]} thirdText01={sliderThirdTextArray[6]} 
      image02={sliderBildArray[7]} firstText02={sliderFirstTextArray[1]} secondText02={sliderSecondTextArray[7]} thirdText02={sliderThirdTextArray[7]} 
      image03={sliderBildArray[8]} firstText03={sliderFirstTextArray[2]} secondText03={sliderSecondTextArray[8]} thirdText03={sliderThirdTextArray[8]}/> */}
      <TwoBild />
      </>
  );
}

export default App;
