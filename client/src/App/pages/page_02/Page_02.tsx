import './page_02.scss';

import Menu from '../../components/menu/Menu';
import Innovative from '../../components/innovative/Innovative';
import Development from '../../components/development/Development';
import Technologies from '../../components/technologies/Technologies';
import Scope from '../../components/scope/Scope';
import Appdev from '../../components/appDev/Appdev';
import SliderTwoVorlage from '../../components/slider/SliderTwoVorlage';
import { sliderBildArray, sliderFirstTextArray, sliderSecondTextArray, sliderThirdTextArray } from '../../components/slider/sliderData';
import Slider from '../../components/slider/Slider';
import Faq from '../../components/faq/Faq';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';


const PageTwo:React.FC = () => {
    return (
        <div className="page_02">
            <div className="page_02_menu"><Menu /></div>
            <div className="page_02_innovative"><Innovative /></div>
            <div className="page_02_development"><Development /></div>
            <div className="page_02_technologies"><Technologies /></div>
            <div className="page_02_scope"><Scope /></div>
            <div className="page_02_appdev"><Appdev /></div>
            <div className="page_02_sliderTwoVorlage"><SliderTwoVorlage /></div>
            <div className="page_02_slider"><Slider 
            image01={sliderBildArray[3]} firstText01={sliderFirstTextArray[3]} secondText01={sliderSecondTextArray[3]} thirdText01={sliderThirdTextArray[3]} 
            image02={sliderBildArray[4]} firstText02={sliderFirstTextArray[4]} secondText02={sliderSecondTextArray[4]} thirdText02={sliderThirdTextArray[4]} 
            image03={sliderBildArray[5]} firstText03={sliderFirstTextArray[5]} secondText03={sliderSecondTextArray[5]} thirdText03={sliderThirdTextArray[5]}/></div>
            <div className="page_02_faq"><Faq /></div>
            <div className="page_02_form"><Form /></div>
            <div className="page_02_footer"><Footer /></div>
        </div>
    )
}

export default PageTwo;