import './page_01.scss';

import Menu from '../../components/menu/Menu';
import StartScreenOne from '../../components/startScreenOne/StartScreenOne';
import Slider from '../../components/slider/Slider';
import { sliderBildArray, sliderFirstTextArray, sliderSecondTextArray, sliderThirdTextArray } from '../../components/slider/sliderData';
import OurClients from '../../components/ourClients/OurClients';
import Design from '../../components/design/Design';
import Testimotional from '../../components/testimotional/Testimotional';
import Vision from '../../components/vision/Vision';
import Faq from '../../components/faq/Faq';
import ReadyStart from '../../components/readyStart/ReadyStart';
import Footer from '../../components/footer/Footer';

import bg from '../../sources/Page_01/bg.png';
import line from '../../sources/Page_01/02_start/lineUnten.png';

const Page_01:React.FC = () => {
    return (
        <div className="page_01">
            <div className="page_01_bg">
                <img src={bg} alt="bg" />
            </div>
            <div className="page_01_menu"><Menu /></div>
            <div className="page_01_startScreen"><StartScreenOne /></div>
            <div className="page_01_line">
                <img src={line} alt="line" />
            </div>
            <div className="page_01_slider"><Slider 
            image01={sliderBildArray[0]} firstText01={sliderFirstTextArray[0]} secondText01={sliderSecondTextArray[0]} thirdText01={sliderThirdTextArray[0]} 
            image02={sliderBildArray[1]} firstText02={sliderFirstTextArray[1]} secondText02={sliderSecondTextArray[1]} thirdText02={sliderThirdTextArray[1]} 
            image03={sliderBildArray[2]} firstText03={sliderFirstTextArray[2]} secondText03={sliderSecondTextArray[2]} thirdText03={sliderThirdTextArray[2]}/></div>
            <div className="page_01_ourClients"><OurClients /></div>
            <div className="page_01_design"><Design /></div>
            <div className="page_01_testimotional"><Testimotional /></div>
            <div className="page_01_vision"><Vision /></div>
            <div className="page_01_faq"><Faq /></div>
            <div className="page_01_ready"><ReadyStart /></div>
            <div className="page_01_footer"><Footer /></div>
            
        </div>
    )
}

export default Page_01;