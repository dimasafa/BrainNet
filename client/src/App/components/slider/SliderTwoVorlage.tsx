import './sliderTwoVorlage.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';

const SliderTwoVorlage:React.FC = () => {

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
        <div className="sliderTwoVorlage">
            <div className={`sliderTwoVorlage_content ${isVisible ? 'sliderTwoVorlage_content' : 'sliderTwoVorlage_content_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="sliderTwoVorlage_firstQ">
                            <div className="sliderTwoVorlage_firstQ_rund"></div>
                            <div className="sliderTwoVorlage_firstQ_text">Our Recent Work</div>
                        </div>
                        <div className="sliderTwoVorlage_header">Portfolio</div>
                        <div className="sliderTwoVorlage_text">Build. Launch. Grow</div>
                    </>
                }
            </div>
        </div>
    )
}

export default SliderTwoVorlage;