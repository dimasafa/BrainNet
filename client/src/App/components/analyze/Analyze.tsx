import './analyze.scss';
import '../../../font/fonts.css';
import bild_01 from '../../sources/Page_03/03_analyze/bild_01.png';
import bild_02 from '../../sources/Page_03/03_analyze/bild_02.png';
import bild_03 from '../../sources/Page_03/03_analyze/bild_03.png';
import { useEffect, useRef, useState } from 'react';


const Analyze:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);


    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [hasBeenVisible2, setHasBeenVisible2] = useState(false);
    const [hasBeenVisible3, setHasBeenVisible3] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentRef2 = useRef<HTMLDivElement | null>(null);
    const componentRef3 = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setHasBeenVisible(true);
                setTimeout(() => {
                    setIsVisible(true);
                }, 200)
                setTimeout(() => {
                    setIsVisible2(true);
                }, 400)
            }
        }
        if (componentRef2.current && !hasBeenVisible2) {
            const elementTop = componentRef2.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 180) {
                setHasBeenVisible2(true);

                setTimeout(() => {
                    setIsVisible3(true);
                }, 500)
                setTimeout(() => {
                    setIsVisible4(true);
                }, 1000)
                setTimeout(() => {
                    setIsVisible5(true);
                }, 1500)
            }
        }
        if (componentRef3.current && !hasBeenVisible3) {
            const elementTop = componentRef3.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 180) {
                setIsVisible6(true);
                setHasBeenVisible3(true);
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
        <div className="analyze">
            <div className={`analyze_first ${isVisible ? 'analyze_first' : 'analyze_first_invisible'}`} ref={componentRef}>
                {isVisible &&
                    <>
                        <div className="analyze_first_text">any kind of data</div>
                    </>
                }
            </div>

            <div className={`analyze_header ${isVisible2 ? 'analyze_header' : 'analyze_header_invisible'}`} ref={componentRef}>
                {isVisible2 &&
                    <>
                        <div className="analyze_header_text">Analyze your Unique, Multidimensional data.</div>
                    </>
                }
            </div>

            <div className="analyze_box">
                <div className={`analyze_box_one ${isVisible3 ? 'analyze_box_one' : 'analyze_box_one_invisible'}`} ref={componentRef2}>
                    {isVisible3 &&
                        <>
                            <div className="analyze_box_card">
                                <img src={bild_01} alt="bild01" />
                                <div className="analyze_box_card_textbox">
                                    <div className="analyze_box_card_textbox_rund"></div>
                                    <div className="analyze_box_card_textbox_text">Full Motion Video</div>
                                    
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className={`analyze_box_two ${isVisible4 ? 'analyze_box_two' : 'analyze_box_two_invisible'}`} ref={componentRef2}>
                    {isVisible4 &&
                        <>
                            <div className="analyze_box_card">
                                <img src={bild_02} alt="bild02" />

                                <div className="analyze_box_card_textbox">
                                    <div className="analyze_box_card_textbox_rund"></div>
                                    <div className="analyze_box_card_textbox_text">Geospatial Data</div>
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className={`analyze_box_one ${isVisible5 ? 'analyze_box_one' : 'analyze_box_one_invisible'}`} ref={componentRef2}>
                    {isVisible5 &&
                        <>
                            <div className="analyze_box_card">
                                <img src={bild_03} alt="bild03" />
                                <div className="analyze_box_card_textbox">
                                    <div className="analyze_box_card_textboаx_rund"></div>
                                    <div className="analyze_box_card_textbox_text">Image Data</div>
                                </div>
                            </div>
                        </>
                    }
                </div>

            </div>

            <div className={`analyze_last ${isVisible6 ? 'analyze_last' : 'analyze_last_invisible'}`} ref={componentRef3}>
                    {isVisible6 &&
                        <>
                            Learn More →
                        </>
                    }
                </div>
        </div>
    )
}

export default Analyze;