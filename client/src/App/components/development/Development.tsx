import './developmentLogo';
import './development.scss';
import '../../../font/fonts.css';
import { devLogoArray } from './developmentLogo';
import { useEffect, useRef, useState } from 'react';

const Development:React.FC = () => {

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
    const [hasBeenVisible4, setHasBeenVisible4] = useState(false);
    const [hasBeenVisible5, setHasBeenVisible5] = useState(false);
    const [hasBeenVisible6, setHasBeenVisible6] = useState(false);
    const [hasBeenVisible7, setHasBeenVisible7] = useState(false);
    const [hasBeenVisible8, setHasBeenVisible8] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentRef2 = useRef<HTMLDivElement | null>(null);
    const componentRef3 = useRef<HTMLDivElement | null>(null);
    const componentRef4 = useRef<HTMLDivElement | null>(null);
    const componentRef5 = useRef<HTMLDivElement | null>(null);
    const componentRef6 = useRef<HTMLDivElement | null>(null);
    const componentRef7 = useRef<HTMLDivElement | null>(null);
    const componentRef8 = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 20) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }
        if (componentRef2.current && !hasBeenVisible2) {
            const elementTop = componentRef2.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible2(true);
                setHasBeenVisible2(true);
            }
        }
        if (componentRef3.current && !hasBeenVisible3) {
            const elementTop = componentRef3.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible3(true);
                setHasBeenVisible3(true);
            }
        }
        if (componentRef4.current && !hasBeenVisible4) {
            const elementTop = componentRef4.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 150) {
                setIsVisible4(true);
                setHasBeenVisible4(true);
            }
        }
        if (componentRef5.current && !hasBeenVisible5) {
            const elementTop = componentRef5.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible5(true);
                setHasBeenVisible5(true);
            }
        }
        if (componentRef6.current && !hasBeenVisible6) {
            const elementTop = componentRef6.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible6(true);
                setHasBeenVisible6(true);
            }
        }
        if (componentRef7.current && !hasBeenVisible7) {
            const elementTop = componentRef7.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 150) {
                setIsVisible7(true);
                setHasBeenVisible7(true);
            }
        }
        if (componentRef8.current && !hasBeenVisible8) {
            const elementTop = componentRef8.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible8(true);
                setHasBeenVisible8(true);
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
        <div className="development">
            <div className={`development_first ${isVisible ? 'development_first' : 'development_first_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="development_first_rund"></div>
                        <div className="development_first_text">A Wide Range of Web Application</div>
                    </>
                }
            </div>

            <div className={`development_title ${isVisible ? 'development_title' : 'development_title_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        Developement Services
                    </>
                }
            </div>

            <div className={`development_text ${isVisible ? 'development_text' : 'development_text_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        Light years ahead of our competitors, Inletsky offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.
                    </>
                }
            </div>

            <div className="development_content">
                <div className="development_content_row">
                    
                    <div className={`development_content_cardbox1 ${isVisible2 ? 'development_content_cardbox1' : 'development_content_cardbox1_invisible'}`} ref={componentRef2}>
                    {isVisible2 && 
                        <>
                            <div className="development_content_card">
                                <img src={devLogoArray[0]} alt="logo01" />
                                <div className="development_content_card_header">Progressive Web Applications (PWAs)</div>
                                <div className="development_content_card_text">Invest your hard-earned money in progressive web app development to provide accessible and user-friendly online experiences.</div>
                            </div>
                            <div className="development_content_line"></div>
                        </>
                    }
                    </div>

                    <div className={`development_content_cardbox2 ${isVisible3 ? 'development_content_cardbox2' : 'development_content_cardbox2_invisible'}`} ref={componentRef3}>
                    {isVisible3 && 
                        <>
                            <div className="development_content_line"></div>
                            <div className="development_content_card">
                                <img src={devLogoArray[1]} alt="logo02" />
                                <div className="development_content_card_header">Enterprise Web Application</div>
                                <div className="development_content_card_text">Build industry-standard enterprise web apps by using our customer-centric agile methodologies and keep your business competitive.</div>
                            </div>
                        </>
                    }
                    </div>

                    <div className={`development_content_cardbox3 ${isVisible4 ? 'development_content_cardbox3' : 'development_content_cardbox3_invisible'}`} ref={componentRef4}>
                    {isVisible4 && 
                        <>
                            <div className="development_content_card">
                                <img src={devLogoArray[2]} alt="logo03" />
                                <div className="development_content_card_header">Web Portals</div>
                                <div className="development_content_card_text">Partner with Inletsky to leverage the competency to host web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</div>
                                
                            </div>
                            <div className="development_content_line"></div>
                        </>
                    }
                    </div>

                </div>
                <div className="development_content_row">
                    <div className={`development_content_cardbox4 ${isVisible5 ? 'development_content_cardbox4' : 'development_content_cardbox4_invisible'}`} ref={componentRef5}>
                        {isVisible5 && 
                            <>
                            <div className="development_content_card">
                                <img src={devLogoArray[3]} alt="logo04" />
                                <div className="development_content_card_header">Cloud-Based Web Applications</div>
                                <div className="development_content_card_text">Hire our developers to leverage the competency of hosting web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</div>
                            </div>
                            <div className="development_content_line"></div>
                            </>
                        }
                    </div>

                    <div className={`development_content_cardbox5 ${isVisible6 ? 'development_content_cardbox5' : 'development_content_cardbox5_invisible'}`} ref={componentRef6}>
                        {isVisible6 && 
                            <>
                                <div className="development_content_line"></div>
                                <div className="development_content_card">
                                    <img src={devLogoArray[4]} alt="logo05" />
                                    <div className="development_content_card_header">Supply Chain Management Web Apps</div>
                                    <div className="development_content_card_text">Outsource web app development services to us and develop automated software to streamline the interconnected network of suppliers, manufacturers, warehouses, distributors and retailers.</div>
                                </div>
                            </>
                        }
                    </div>

                    <div className={`development_content_cardbox6 ${isVisible7 ? 'development_content_cardbox6' : 'development_content_cardbox6_invisible'}`} ref={componentRef7}>
                        {isVisible7 && 
                            <>
                                <div className="development_content_card">
                                    <img src={devLogoArray[5]} alt="logo06" />
                                    <div className="development_content_card_header">Web Application Consulting</div>
                                    <div className="development_content_card_text">Our team enjoys the challenge of working on uncharted prospects and helps with brainstorming, analysis, and finalizing the solution landscape for web application development.</div>
                                    
                                </div>
                                <div className="development_content_line"></div>
                            </>
                        }
                    </div>
                </div>

            </div>


            <div className={`development_last ${isVisible8 ? 'development_last_cardbox' : 'development_last_cardbox_invisible'}`} ref={componentRef8}>
                        {isVisible8 && 
                            <>
                                hire dedicated developement team  →
                            </>
                        }
            </div>
        </div>
    )
}

export default Development;