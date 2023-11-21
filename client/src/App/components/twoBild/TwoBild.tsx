import './twoBild.scss';
import '../../../font/fonts.css';
import bild from '../../sources/Page_04/04_twoBild/bild.png';

import React, { useEffect, useRef, useState } from 'react';

const TwoBild:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 20) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBeenVisible]); 


    return(
        <div className="twoBild">
            <div className="twoBild_content">
                <div className={`twoBild_content_cardOne ${isVisible ? 'twoBild_content_cardOne' : 'twoBild_content_cardOne_invisible'}`} ref={componentRef}>
                    {isVisible && 
                    <>
                        <img src={bild} alt="bild" />
                        <div className="twoBild_content_cardOne_header">Selecting the Right Cloud for Your Business.</div>
                        <div className="twoBild_content_cardOne_text">There are a myriad of cloud options and service levels available today – the challenge is to ensure that service capabilities align with your business requirements and help your business accelerate growth and unlock innovation.</div>
                        <div className="twoBild_content_cardOne_last">Read Blog  →</div>
                    </>
                    }

                </div>
                <div className={`twoBild_content_cardTwo ${isVisible ? 'twoBild_content_cardTwo' : 'twoBild_content_cardTwo_invisible'}`} >
                    {isVisible && 
                    <>
                        <img src={bild} alt="bild" />
                        <div className="twoBild_content_cardTwo_header">How businesses can maximise the use of their public cloud investment to emerge stronger</div>
                        <div className="twoBild_content_cardTwo_text">In the midst of the global pandemic, it has become very clear that the different responses businesses have taken to the situation can be tied to mindset.</div>
                        <div className="twoBild_content_cardTwo_last">Learn More  →</div>
                    </>
                    }

                </div>
            </div>
        </div>
    )
}

export default TwoBild;