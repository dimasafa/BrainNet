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
import { useEffect, useState } from 'react';

const PageFour:React.FC = () => {

    const [one, setone] = useState(false);
    const [two, settwo] = useState(false);
    const [three, setthree] = useState(false);
    const [four, setfour] = useState(false);
    const [five, setfive] = useState(false);
    const [six, setsix] = useState(false);
    const [seven, setseven] = useState(false);

    const setOne = (neu: boolean): void => {
        setone(true);
    };
    const setTwo = (neu: boolean): void => {
        settwo(true);
    };
    const setThree = (neu: boolean): void => {
        setthree(true);
    };
    const setFour = (neu: boolean): void => {
        setfour(true);
    };
    const setFive = (neu: boolean): void => {
        setfive(true);
    };
    const setSix = (neu: boolean): void => {
        setsix(true);
    };
    const setSeven= (neu: boolean): void => {
        setseven(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="page_04">
            <div className="page_04_menu" > <Menu /></div>
            <div className="page_04_test"></div>
            <div className="page_04_startFour" ><StartScreenFour /* end={one} setEnd={setOne} *//></div>
            

            <div className="page_04_cost"><Cost  /* start={one} end={two} setEnd={setTwo} *//></div>
            <div className="page_04_business"><Business /* start={two} end={three} setEnd={setThree} *//></div>
            <div className="page_04_sliderVorlageThree"><SliderThreeVorlage /* start={three} end={four} setEnd={setFour} *//></div>
            <div className="page_04_sliderThree"><Slider 
            image01={sliderBildArray[6]} firstText01={sliderFirstTextArray[0]} secondText01={sliderSecondTextArray[6]} thirdText01={sliderThirdTextArray[6]} 
            image02={slEight} firstText02={sliderFirstTextArray[1]} secondText02={sliderSecondTextArray[7]} thirdText02={sliderThirdTextArray[7]} 
            image03={slNine} firstText03={sliderFirstTextArray[2]} secondText03={sliderSecondTextArray[8]} thirdText03={sliderThirdTextArray[8]} /* start={four} end={five} setEnd={setFive} *//></div>

            <div className='page_04_twobild' ><TwoBild /* start={five} end={six} setEnd={setSix} *//></div>

            <div className="page_04_form" ><Form /* start={six} end={seven} setEnd={setSeven} *//></div>
            <div className="page_04_footer"><Footer /* start={seven} *//></div>
            <div className="page_04_bg">
                <img src={bild} alt="bg" />
            </div>
        </div>
    )
}

export default PageFour;