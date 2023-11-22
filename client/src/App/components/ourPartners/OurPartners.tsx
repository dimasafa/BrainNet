import './ourpartners.scss';
import '../../../font/fonts.css';

import logo_01 from '../../sources/Page_03/05_partner/logo_01.svg';
import logo_02 from '../../sources/Page_03/05_partner/logo_02.svg';
import logo_03 from '../../sources/Page_03/05_partner/logo_03.svg';
import logo_04 from '../../sources/Page_03/05_partner/logo_04.svg';
import logo_05 from '../../sources/Page_03/05_partner/logo_05.svg';
import { useEffect, useRef, useState } from 'react';

const OurPartners:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);



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

            if (elementTop < windowHeight - 120) {
                setHasBeenVisible2(true);

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
                    setIsVisible7(true);
                }, 1000)
            }
        }
        if (componentRef3.current && !hasBeenVisible3) {
            const elementTop = componentRef3.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible8(true);
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
        <div className="ourPartners">
            <div className="ourPartners_line"></div>

            <div className={`ourPartners_first ${isVisible ? 'ourPartners_first' : 'ourPartners_first_invisible'}`} ref={componentRef}>
                    {isVisible &&
                        <>
                            <div className="ourPartners_first_text">WE WORK WITH SOME OF THE BEST TO UNLOCK IMPOSSIBLE AI.</div>
                        </>
                    }
            </div>

            <div className={`ourPartners_header ${isVisible2 ? 'ourPartners_header' : 'ourPartners_header_invisible'}`} ref={componentRef}>
                    {isVisible2 &&
                        <>
                            Our Partners
                        </>
                    }
            </div>

            <div className="ourPartners_logoBox">
                <div className={`ourPartners_logoBox_1 ${isVisible3 ? 'ourPartners_logoBox_1' : 'ourPartners_logoBox_1_invisible'}`} ref={componentRef2}>
                        {isVisible3 &&
                            <>
                                <img src={logo_01} alt="logo01" />
                            </>
                        }
                </div>

                <div className={`ourPartners_logoBox_2 ${isVisible4 ? 'ourPartners_logoBox_2' : 'ourPartners_logoBox_2_invisible'}`} ref={componentRef2}>
                    {isVisible4 &&
                        <>
                            <img src={logo_02} alt="logo02" />
                        </>
                    }
                </div>

                <div className={`ourPartners_logoBox_3 ${isVisible5 ? 'ourPartners_logoBox_3' : 'ourPartners_logoBox_3_invisible'}`} ref={componentRef2}>
                    {isVisible5 &&
                        <>
                            <img src={logo_03} alt="logo03" />
                        </>
                    }
                </div>

                <div className={`ourPartners_logoBox_4 ${isVisible6 ? 'ourPartners_logoBox_4' : 'ourPartners_logoBox_4_invisible'}`} ref={componentRef2}>
                    {isVisible6 &&
                        <>
                            <img src={logo_04} alt="logo04" />
                        </>
                    }
                </div>

                <div className={`ourPartners_logoBox_5 ${isVisible7 ? 'ourPartners_logoBox_5' : 'ourPartners_logoBox_5_invisible'}`} ref={componentRef2}>
                    {isVisible7 &&
                        <>
                            <img src={logo_05} alt="logo05" />
                        </>
                    }
                </div>

            </div>

            <div className={`ourPartners_last ${isVisible7 ? 'ourPartners_last' : 'ourPartners_last_invisible'}`} ref={componentRef2}>
                    {isVisible7 &&
                        <>
                            View customere stories  →
                        </>
                    }
                </div>
        </div>
    )
}

export default OurPartners;