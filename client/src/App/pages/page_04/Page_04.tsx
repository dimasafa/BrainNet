import './page_04.scss';

import Menu from '../../components/menu/Menu';
import StartScreenFour from '../../components/startScrenFour/startScreenFour';
import Cost from '../../components/cost/Cost';
import Business from '../../components/business/Business';
import SliderThreeVorlage from '../../components/slider/SliderThreeVorlage';
import Slider from '../../components/slider/Slider';
import { sliderBildArray, sliderFirstTextArray, sliderSecondTextArray, sliderThirdTextArray } from '../../components/slider/sliderData';
import TwoBild from '../../components/twoBild/TwoBild';
import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';

import bild from '../../sources/Page_04/bg.png';
import slEight from '../../sources/Page_04/03_slider/pic.png';
import slNine from '../../sources/Page_04/03_slider/bild.png';

const Page_04:React.FC = () => {
    return (
        <div className="page_04">
            <div className="page_04_menu"><Menu /></div>
            <div className="page_04_startFour"><StartScreenFour /></div>
            <div className="page_04_cost"><Cost /></div>
            <div className="page_04_business"><Business /></div>
            <div className="page_04_sliderVorlageThree"><SliderThreeVorlage /></div>
            <div className="page_04_sliderThree"><Slider 
            image01={sliderBildArray[6]} firstText01={sliderFirstTextArray[0]} secondText01={sliderSecondTextArray[6]} thirdText01={sliderThirdTextArray[6]} 
            image02={slEight} firstText02={sliderFirstTextArray[1]} secondText02={sliderSecondTextArray[7]} thirdText02={sliderThirdTextArray[7]} 
            image03={slNine} firstText03={sliderFirstTextArray[2]} secondText03={sliderSecondTextArray[8]} thirdText03={sliderThirdTextArray[8]}/></div>
            <div className="page_04_twobild"><TwoBild /></div>
            <div className="page_04_form"><Form /></div>
            <div className="page_04_footer"><Footer /></div>
            <div className="page_04_bg">
                <img src={bild} alt="bg" />
            </div>
        </div>
    )
}

export default Page_04;