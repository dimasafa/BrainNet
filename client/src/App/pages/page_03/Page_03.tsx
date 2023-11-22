import './page_03.scss';

import Menu from '../../components/menu/Menu';
import StartScreenThree from '../../components/startScreenThree/StartScreenThree';
import Detection from '../../components/detection/Detection';
import Analyze from '../../components/analyze/Analyze';
import Standard from '../../components/standard/Standard';
import OurPartners from '../../components/ourPartners/OurPartners';
import Ai from '../../components/ai/Ai';
import Reach from '../../components/reach/Reach';
import Footer from '../../components/footer/Footer';

import bild from '../../sources/Page_03/bg_02.png'
import { useEffect } from 'react';


const PageThree:React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page_03">
            <div className="page_03_menu"><Menu /></div>
            <div className="page_03_startScreen"><StartScreenThree /></div>
            <div className="page_03_detection"><Detection /></div>
            <div className="page_03_analyze"><Analyze /></div>
            <div className="page_03_standard"><Standard /></div>
            <div className="page_03_ourPartner"><OurPartners /></div>
            <div className="page_03_ai"><Ai /></div>
            <div className="page_03_reach"><Reach /></div>
            <div className="page_03_footer"><Footer /></div>
            <div className="page_03_bild">
                <img src={bild} alt="bg" />
            </div>
        </div>
    )
}


export default PageThree;