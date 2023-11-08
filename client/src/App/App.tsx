
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

import { sliderBildArray, sliderFirstTextArray, sliderSecondTextArray, sliderThirdTextArray } from './components/slider/sliderData';

const App = () => {
  return (
    <>
      {/* <Menu />
      <StartScreenOne /> */}
      {/* <Slider image01={sliderBildArray[0]} firstText01={sliderFirstTextArray[0]} secondText01={sliderSecondTextArray[0]} thirdText01={sliderThirdTextArray[0]} image02={sliderBildArray[1]} firstText02={sliderFirstTextArray[1]} secondText02={sliderSecondTextArray[1]} thirdText02={sliderThirdTextArray[1]} image03={sliderBildArray[2]} firstText03={sliderFirstTextArray[2]} secondText03={sliderSecondTextArray[2]} thirdText03={sliderThirdTextArray[2]}/> */}
      <Form />
    </>
  );
}

export default App;
