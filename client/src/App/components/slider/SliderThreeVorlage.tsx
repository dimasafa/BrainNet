import './sliderThreeVorlage.scss';
import '../../../font/fonts.css';

import React, { useEffect, useRef, useState } from 'react';

const SliderThreeVorlage:React.FC = () => {

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

    return (
        <div className="sliderThreeVorlage">
            <div className={`sliderThreeVorlage_content ${isVisible ? 'sliderThreeVorlage_content' : 'sliderThreeVorlage_content_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="sliderThreeVorlage_first">
                            <div className="sliderThreeVorlage_first_rund"></div>
                            <div className="sliderThreeVorlage_first_text">Our Recent Work</div>
                        </div>
                        <div className="sliderThreeVorlage_header">Optimal performance</div>
                        <div className="sliderThreeVorlage_text">With no need to restrict applications or workloads to one type of business cloud solution, organisations are adopting our Hybrid and Multi-Cloud model because it delivers a fluid mix of cloud computing solutions with exceptional business outcomes.</div>
                    </>
                }
            </div>
        </div>
    )
}

export default SliderThreeVorlage;