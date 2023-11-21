import './ourClients.scss';
import '../../../font/fonts.css';

import './ourClientsLogo';
import { logoArray } from './ourClientsLogo';
import { useEffect, useRef, useState } from 'react';

const OurClients:React.FC = () => {

    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);
    const [isVisible9, setIsVisible9] = useState(false);
    const [isVisible10, setIsVisible10] = useState(false);
    const [isVisible11, setIsVisible11] = useState(false);
    const [isVisible12, setIsVisible12] = useState(false);
    const [isVisible13, setIsVisible13] = useState(false);
    const [isVisible14, setIsVisible14] = useState(false);
    const [isVisible15, setIsVisible15] = useState(false);
    const [isVisible16, setIsVisible16] = useState(false);
    const [isVisible17, setIsVisible17] = useState(false);

    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [hasBeenVisibletwo, setHasBeenVisibletwo] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentReftwo = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }
        if (componentReftwo.current && !hasBeenVisibletwo) {
            const elementTop = componentReftwo.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible2(true);
                setHasBeenVisibletwo(true);

                setTimeout(() => {
                    setIsVisible3(true);
                }, 200)
                setTimeout(() => {
                    setIsVisible4(true);
                }, 400)
                setTimeout(() => {
                    setIsVisible5(true);
                }, 600)
                setTimeout(() => {
                    setIsVisible6(true);
                }, 800)
    
                setTimeout(() => {
                    setIsVisible11(true);
                }, 1000)
                setTimeout(() => {
                    setIsVisible10(true);
                }, 1200)
                setTimeout(() => {
                    setIsVisible9(true);
                }, 1400)
                setTimeout(() => {
                    setIsVisible8(true);
                }, 1600)
                setTimeout(() => {
                    setIsVisible7(true);
                }, 1800)
    
                setTimeout(() => {
                    setIsVisible12(true);
                }, 2000)
                setTimeout(() => {
                    setIsVisible13(true);
                }, 2200)
                setTimeout(() => {
                    setIsVisible14(true);
                }, 2400)
                setTimeout(() => {
                    setIsVisible15(true);
                }, 2600)
                setTimeout(() => {
                    setIsVisible16(true);
                }, 2800)
                setTimeout(() => {
                    setIsVisible17(true);
                }, 3500)
            }
            
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBeenVisible]); 


    return (
        <div className="ourClients">
            <div className={`ourClients_content ${isVisible ? 'ourClients_content' : 'ourClients_content_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="ourClients_content_first">                        
                            <div className="ourClients_content_first_rund"></div>
                            <div className="ourClients_content_first_text">Trusted by the industry leaders</div>
                        </div>
                        <div className="ourClients_content_header">Our Clients</div>
                    </>
                }

            </div>

            <div className="ourClients_lineOne" ref={componentReftwo}>
                <div className={`ourClients_lineOne_logone ${isVisible2 ? ' ourClients_lineOne_logone' : ' ourClients_lineOne_logone_invisible'}`}>{isVisible2 &&
                <><img src={logoArray[0]} alt="logo01" /></>
                }</div>
                <div className={`ourClients_lineOne_logtwo ${isVisible3 ? ' ourClients_lineOne_logtwo' : ' ourClients_lineOne_logtwo_invisible'}`}>{isVisible3 &&
                <><img src={logoArray[1]} alt="logo02" /></>
                }</div>
                <div className={`ourClients_lineOne_logthree ${isVisible4 ? ' ourClients_lineOne_logthree' : ' ourClients_lineOne_logthree_invisible'}`}>{isVisible4 &&
                <><img src={logoArray[2]} alt="logo03" /></>
                }</div>
                <div className={`ourClients_lineOne_logfour ${isVisible5 ? ' ourClients_lineOne_logfour' : ' ourClients_lineOne_logfour_invisible'}`}>{isVisible5 &&
                <><img src={logoArray[3]} alt="logo04" /></>
                }</div>
                <div className={`ourClients_lineOne_logfive ${isVisible6 ? ' ourClients_lineOne_logfive' : ' ourClients_lineOne_logfive_invisible'}`}>{isVisible6 &&
                <><img src={logoArray[4]} alt="logo05" /></>
                }</div>
            </div>
            <div className="ourClients_lineTwo">
                <div className={`ourClients_lineTwo_logsix ${isVisible7 ? ' ourClients_lineTwo_logsix' : ' ourClients_lineTwo_logsix_invisible'}`}>{isVisible7 &&
                <><img src={logoArray[5]} alt="logo06" /></>
                }</div>
                <div className={`ourClients_lineTwo_logseven ${isVisible8 ? ' ourClients_lineTwo_logseven' : ' ourClients_lineTwo_logseven_invisible'}`}>{isVisible8 &&
                <><img src={logoArray[6]} alt="logo07" /></>
                }</div>
                <div className={`ourClients_lineTwo_logeight ${isVisible9 ? ' ourClients_lineTwo_logeight' : ' ourClients_lineTwo_logeight_invisible'}`}>{isVisible9 &&
                <><img src={logoArray[7]} alt="logo08" /></>
                }</div>
                <div className={`ourClients_lineTwo_lognine ${isVisible10 ? ' ourClients_lineTwo_lognine' : ' ourClients_lineTwo_lognine_invisible'}`}>{isVisible10 &&
                <><img src={logoArray[8]} alt="logo09" /></>
                }</div>
                <div className={`ourClients_lineTwo_logten ${isVisible11 ? ' ourClients_lineTwo_logten' : ' ourClients_lineTwo_logten_invisible'}`}>{isVisible11 &&
                <><img src={logoArray[9]} alt="logo10" /></>
                }</div>
            </div>
            <div className="ourClients_lineThree">
                <div className={`ourClients_lineThree_logeleven ${isVisible12 ? ' ourClients_lineThree_logeleven' : ' ourClients_lineThree_logeleven_invisible'}`}>{isVisible12 &&
                    <><img src={logoArray[10]} alt="logo11" /></>
                }</div>
                <div className={`ourClients_lineThree_logtwelve ${isVisible13 ? ' ourClients_lineThree_logtwelve' : ' ourClients_lineThree_logtwelve_invisible'}`}>{isVisible13 &&
                    <><img src={logoArray[11]} alt="logo12" /></>
                }</div>
                <div className={`ourClients_lineThree_logthirteen ${isVisible14 ? ' ourClients_lineThree_logthirteen' : ' ourClients_lineThree_logthirteen_invisible'}`}>{isVisible14 &&
                    <><img src={logoArray[12]} alt="logo13" /></>
                }</div>
                <div className={`ourClients_lineThree_logfourteen ${isVisible15 ? ' ourClients_lineThree_logfourteen' : ' ourClients_lineThree_logfourteen_invisible'}`}>{isVisible15 &&
                    <><img src={logoArray[13]} alt="logo14" /></>
                }</div>
                <div className={`ourClients_lineThree_logfifteen ${isVisible16 ? ' ourClients_lineThree_logfifteen' : ' ourClients_lineThree_logfifteen_invisible'}`}>{isVisible16 &&
                    <><img src={logoArray[14]} alt="logo15" /></>
                }</div>
            </div>

            <a href="#" onClick={defaultLink} >
                <div className={`ourClients_bottom ${isVisible17 ? 'ourClients_bottom' : 'ourClients_bottom_invisible'}`} >
                    {isVisible17 &&
                        <>
                            <div className="ourClients_bottomText">View customere stories  →</div>
                            <div className="ourClients_bottomText_blur">
                            </div>
                        </>
                    }
                </div>
            </a>


        </div>
    )
}
export default OurClients;