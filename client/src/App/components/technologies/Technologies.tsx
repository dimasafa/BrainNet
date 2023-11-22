import './technologies.scss';
import '../../../font/fonts.css';
import { techLogoArray } from './technologiesLogo';
import { useEffect, useRef, useState } from 'react';

const Technologies:React.FC = () => {

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
    const [isVisible18, setIsVisible18] = useState(false);
    const [isVisible19, setIsVisible19] = useState(false);
    const [isVisible20, setIsVisible20] = useState(false);
    const [isVisible21, setIsVisible21] = useState(false);
    const [isVisible22, setIsVisible22] = useState(false);

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
                }, 700)
                setTimeout(() => {
                    setIsVisible4(true);
                }, 100)
                setTimeout(() => {
                    setIsVisible5(true);
                }, 400)
                setTimeout(() => {
                    setIsVisible6(true);
                }, 1100)
    
                setTimeout(() => {
                    setIsVisible11(true);
                }, 1700)
                setTimeout(() => {
                    setIsVisible10(true);
                }, 300)
                setTimeout(() => {
                    setIsVisible9(true);
                }, 1900)
                setTimeout(() => {
                    setIsVisible8(true);
                }, 600)
                setTimeout(() => {
                    setIsVisible7(true);
                }, 1000)
    
                setTimeout(() => {
                    setIsVisible12(true);
                }, 900)
                setTimeout(() => {
                    setIsVisible13(true);
                }, 1200)
                setTimeout(() => {
                    setIsVisible14(true);
                }, 1500)
                setTimeout(() => {
                    setIsVisible15(true);
                }, 1800)
                setTimeout(() => {
                    setIsVisible16(true);
                }, 200)
                setTimeout(() => {
                    setIsVisible17(true);
                }, 500)
                setTimeout(() => {
                    setIsVisible18(true);
                }, 1600)
                setTimeout(() => {
                    setIsVisible19(true);
                }, 2000)
                setTimeout(() => {
                    setIsVisible20(true);
                }, 1300)
                setTimeout(() => {
                    setIsVisible21(true);
                }, 800)
                setTimeout(() => {
                    setIsVisible22(true);
                }, 1400)
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
        <div className="technologies">
            <div className={`technologies_first ${isVisible ? 'technologies_first' : 'technologies_first_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="technologies_first_rund"></div>
                        <div className="technologies_first_text">Our Favorite Folder Of The</div>
                    </>
                }
            </div>

            <div className={`technologies_header ${isVisible ? 'technologies_header' : 'technologies_header_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        Technologies
                    </>
                }
            </div>

            <div className="technologies_logoBox" ref={componentReftwo}>

                <div className={`technologies_logoBox_1 ${isVisible2 ? 'technologies_logoBox_1' : 'technologies_logoBox_1_invisible'}`} ref={componentReftwo}>
                    {isVisible2 && 
                        <>
                            <img src={techLogoArray[0]} alt="logo01" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_2 ${isVisible3 ? 'technologies_logoBox_2' : 'technologies_logoBox_2_invisible'}`} ref={componentReftwo}>
                    {isVisible3 && 
                        <>
                            <img src={techLogoArray[1]} alt="logo02" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_3 ${isVisible4 ? 'technologies_logoBox_3' : 'technologies_logoBox_3_invisible'}`} ref={componentReftwo}>
                    {isVisible4 && 
                        <>
                            <img src={techLogoArray[2]} alt="logo03" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_4 ${isVisible5 ? 'technologies_logoBox_4' : 'technologies_logoBox_4_invisible'}`} ref={componentReftwo}>
                    {isVisible5 && 
                        <>
                            <img src={techLogoArray[3]} alt="logo04" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_5 ${isVisible6 ? 'technologies_logoBox_5' : 'technologies_logoBox_5_invisible'}`} ref={componentReftwo}>
                    {isVisible6 && 
                        <>
                            <img src={techLogoArray[4]} alt="logo05" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_6 ${isVisible7 ? 'technologies_logoBox_6' : 'technologies_logoBox_6_invisible'}`} ref={componentReftwo}>
                    {isVisible7 && 
                        <>
                            <img src={techLogoArray[5]} alt="logo06" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_7 ${isVisible8 ? 'technologies_logoBox_7' : 'technologies_logoBox_7_invisible'}`} ref={componentReftwo}>
                    {isVisible8 && 
                        <>
                            <img src={techLogoArray[6]} alt="logo07" />
                        </>
                    }
                </div>
                
                </div>
            <div className="technologies_logoBox">

                <div className={`technologies_logoBox_8 ${isVisible9 ? 'technologies_logoBox_8' : 'technologies_logoBox_8_invisible'}`} ref={componentReftwo}>
                    {isVisible9 && 
                        <>
                            <img src={techLogoArray[7]} alt="logo08" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_9 ${isVisible10 ? 'technologies_logoBox_9' : 'technologies_logoBox_9_invisible'}`} ref={componentReftwo}>
                    {isVisible10 && 
                        <>
                            <img src={techLogoArray[8]} alt="logo09" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_10 ${isVisible11 ? 'technologies_logoBox_10' : 'technologies_logoBox_10_invisible'}`} ref={componentReftwo}>
                    {isVisible11 && 
                        <>
                            <img src={techLogoArray[9]} alt="logo10" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_11 ${isVisible12 ? 'technologies_logoBox_11' : 'technologies_logoBox_11_invisible'}`} ref={componentReftwo}>
                    {isVisible12 && 
                        <>
                            <img src={techLogoArray[10]} alt="logo11" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_12 ${isVisible13 ? 'technologies_logoBox_12' : 'technologies_logoBox_12_invisible'}`} ref={componentReftwo}>
                    {isVisible13 && 
                        <>
                            <img src={techLogoArray[11]} alt="logo12" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_13 ${isVisible14 ? 'technologies_logoBox_13' : 'technologies_logoBox_13_invisible'}`} ref={componentReftwo}>
                    {isVisible14 && 
                        <>
                            <img src={techLogoArray[12]} alt="logo13" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_14 ${isVisible15 ? 'technologies_logoBox_14' : 'technologies_logoBox_14_invisible'}`} ref={componentReftwo}>
                    {isVisible15 && 
                        <>
                            <img src={techLogoArray[13]} alt="logo14" />
                        </>
                    }
                </div>
                
            </div>
            <div className="technologies_logoBox">

                <div className={`technologies_logoBox_15 ${isVisible16 ? 'technologies_logoBox_15' : 'technologies_logoBox_15_invisible'}`} ref={componentReftwo}>
                    {isVisible16 && 
                        <>
                            <img src={techLogoArray[14]} alt="logo15" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_16 ${isVisible17 ? 'technologies_logoBox_16' : 'technologies_logoBox_16_invisible'}`} ref={componentReftwo}>
                    {isVisible17 && 
                        <>
                            <img src={techLogoArray[15]} alt="logo16" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_17 ${isVisible18 ? 'technologies_logoBox_17' : 'technologies_logoBox_17_invisible'}`} ref={componentReftwo}>
                    {isVisible18 && 
                        <>
                            <img src={techLogoArray[16]} alt="logo17" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_18 ${isVisible19 ? 'technologies_logoBox_18' : 'technologies_logoBox_18_invisible'}`} ref={componentReftwo}>
                    {isVisible19 && 
                        <>
                            <img src={techLogoArray[17]} alt="logo18" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_19 ${isVisible20 ? 'technologies_logoBox_19' : 'technologies_logoBox_19_invisible'}`} ref={componentReftwo}>
                    {isVisible20 && 
                        <>
                            <img src={techLogoArray[18]} alt="logo19" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_20 ${isVisible21 ? 'technologies_logoBox_20' : 'technologies_logoBox_20_invisible'}`} ref={componentReftwo}>
                    {isVisible21 && 
                        <>
                            <img src={techLogoArray[19]} alt="logo20" />
                        </>
                    }
                </div>

                <div className={`technologies_logoBox_21 ${isVisible22 ? 'technologies_logoBox_21' : 'technologies_logoBox_21_invisible'}`} ref={componentReftwo}>
                    {isVisible22 && 
                        <>
                            <img src={techLogoArray[20]} alt="logo21" />
                        </>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Technologies;